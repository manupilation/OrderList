class Report {
  constructor(orderJson, notesJson) {
    this.orderJson = orderJson;
    this.notesJson = notesJson;
    this.finalValue = {};
    this.productQuantity = {};
    this.init();
  }

  mapReduceOrders() {
    const mapOrders = this.orderJson.map((order) => {
      const reduceOrders = order.data.reduce((prev, curr) => {
        prev.push(curr.numero_item);
        return prev;
      }, []);

      return reduceOrders;
    });

    return mapOrders;
  }

  mapReduceNotes() {
    const mapNotes = this.notesJson.map((note) => {
      const reduceNotes = note.data.reduce((prev, curr) => {
        prev.push(curr.id_pedido);
        return prev;
      }, []);

      return reduceNotes;
    });

    return mapNotes;
  }

  verifyIds() {
    const mapOrders = this.mapReduceOrders();
    const mapNotes = this.mapReduceNotes();
    const idsOfOrders = new Set(mapOrders.reduce((list, id) => list.concat(id)), []);
    const idsOfNotes = new Set(mapNotes.reduce((list, id) => list.concat(id)), []);

    const verify = idsOfNotes.forEach((id) => {
      const bool = idsOfOrders.has(id);
      if (!bool) {
        throw new Error('Error: Your documents seem to be missing one or more id\'s.');
      }
      return true;
    });

    return verify;
  }

  reduceDataNote() {
    const resultMap = new Map();
    const data = this.notesJson.reduce((list, next) => {
      list = [...list, ...next.data];
      return list;
    }, []);

    data.forEach((obj) => {
      const key = `${obj.id_pedido}-${obj.numero_item}`;

      if (!resultMap.has(key)) {
        resultMap.set(key, {
          id: obj.id_pedido,
          numero_item: obj.numero_item,
          quantidade_produto: obj.quantidade_produto,
        });
      }
      resultMap.get(key).quantidade_produto += obj.quantidade_produto;
    });
    const result = Array.from(resultMap.values()).sort((a, b) => a.id - b.id);
    return result;
  }

  separatorById(id) {
    const data = this.reduceDataNote();
    const separator = data.filter((item) => item.id === id);
    // console.log(separator);
    return separator;
  }

  calcPendingOrder(order) {
    const separator = this.separatorById(Number(order.id.replace('P', '')));

    order.data.forEach((ord) => {
      const findNoteById = separator.find((note) => note.numero_item === ord.numero_item);
      if (!findNoteById) {
        return;
      }

      const key = `${findNoteById?.id}-${ord.codigo_produto}`;
      if (!this.finalValue[key]) {
        this.finalValue[key] = {
          ...findNoteById,
          valor_produto: Number(ord.valor_unitario_produto.replace(',', '.')),
        };
      }
      if (!this.productQuantity[key]) {
        this.productQuantity[key] = {};
      }
      this.productQuantity[key] = {
        quantity: Number(findNoteById.quantidade_produto - ord.quantidade_produto),
      };
      this.finalValue[key] = {
        ...this.finalValue[key],
        saldo_produto: this.productQuantity[key].quantity,
      };
    });
  }

  init() {
    this.verifyIds();
    this.orderJson.forEach((order) => this.calcPendingOrder(order));
  }
}

module.exports = Report;
