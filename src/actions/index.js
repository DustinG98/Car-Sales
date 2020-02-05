//removeItem
//addItem

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id
    }
}

export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}