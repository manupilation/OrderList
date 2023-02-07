class Report {
  constructor(orderJson, notesJson) {
    this.orderJson = orderJson;
    this.notesJson = notesJson;

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

  init() {
    this.verifyIds();
  }
}

module.exports = Report;
