{
    //Utility types

    type Person = {
        name : string;
        age: number;
        email?: string;
        contactNo: string
    }

    type Name = Pick<Person, "name" | 'age' >
    type ContactNo = Omit<Person, "name" | 'age' >

    //Required
    type PersonRequired = Required<Person>

    //partial
    type PersonPartial = Partial<Person>

    // read Only
    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly = {
            name: 'sadik',
            age: 200,
            contactNo: '13213'
    }
    // person1.name= 'sadik2'


    //Record

    // type MyObj = {
    //     a: string;
    //     b: string
    // }

    type MyObj = Record<string, string>

    const EmptyObj : Record<string, unknown> = {}

    const obj1: MyObj = {
        a: 'aa',
        b: 'fff',
        c: 'ccc',
        d: 'ddd'
    }

    //
}