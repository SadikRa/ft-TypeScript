{
    ///map type 

    // type todo 

    type ToDo = {
        task: string;
        complete: boolean;
        dueDate : string
    }


    const requiredToDo: ToDo = {
        task: "akta kaj",
        complete: false,
        dueDate : '11, 11'
    }

    /// map type 

    type OptionalToDo = {
        [ T in keyof ToDo]? : ToDo[T]
    }

    const task: OptionalToDo = {
        task: 'ami kaj korbo nah'
    }

    console.log(task)
    //
}