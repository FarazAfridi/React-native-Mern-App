export const ADD_TODO = "ADD_TODO";
export const DELELTE_TODO = "DELETE_TODO";
export const GET_TODO = "GET_TODO";

export const fetchProducts = () => {
    return async (dispatch) => {
        try{
          const res = await fetch("http://192.168.0.104:8000/api/get_todos")
          const data = await res.json()          
            
        dispatch({
            type: GET_TODO,
            payload: data
        })
    } catch(error){
        console.log(err)
    }
}
}

export const addTodo = (todo) => {
    return async (dispatch) => {
        try {

            await fetch("http://192.168.0.104:8000/api/add_todo", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                  todo: {
                    name: todo.todoName,
                    status: todo.status,
                  },
                }),
              })
                .then(() => console.log("data sent"))
                .catch((err) => console.log(err));

            dispatch({
                type: ADD_TODO,
                payload: todo
            })
        } catch (error) {
            throw Error
        }
    }
}

export const deleteTodo = (id) => {
    return async (dispatch) => {
    try {
    await fetch("http://192.168.0.104:8000/api/remove_todo", {
        headers: { "Content-Type": "application/json" },
        method: 'DELETE',
        body: JSON.stringify({
          id
        })
      })
      .then(() => console.log("id sent"))
      .catch((err) => console.log(err));

      dispatch({
          type: DELELTE_TODO,
          payload: id
      })

    }catch(err){
        throw Error
    }
}
}