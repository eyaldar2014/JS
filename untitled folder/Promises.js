const users = [
    {
        name: 'Or Froind',
        capsule: 4,
        gender: 'M'

    },
    {
        name: 'or ahstamker',
        capsule: 5,
        gender: 'M'

    },
    {
        name: 'eyal ilan',
        capsule: 3,
        gender: 'M'

    },
    {
        name: 'eyal dar',
        capsule: 2,
        gender: 'M'

    },
    {
        name: 'ayelet danieli',
        capsule: 3,
        gender: 'F'

    },
    {
        name: 'Inna ilyaev',
        capsule: 1,
        gender: 'F'

    },
    {
        name: 'irit hindi',
        capsule: 1,
        gender: 'F'

    },
    {
        name: 'shefer guy',
        capsule: 4,
        gender: 'M'

    },
    {
        name: 'Gilad yefet',
        capsule: 4,
        gender: 'M'
    },
    {
        name: 'david sason',
        capsule: 3,
        gender: 'M'
    },
    {
        name: 'david bobrosci',
        capsule: 5,
        gender: 'M'
    },
    {
        name: 'dima Krepak',
        capsule: 5,
        gender: 'M'
    },
    {
        name: 'talya gabso',
        capsule: 5,
        gender: 'F'
    },
    {
        name: 'yana dekel',
        capsule: 4,
        gender: 'F'
    },
    {
        name: 'Yosi yizhak',
        capsule: 1,
        gender: 'M'
    },
    {
        name: 'michael sasonker',
        capsule: 2,
        gender: 'M'
    },
    {
        name: 'maxim feldman',
        capsule: 2,
        gender: 'M'
    },
    {
        name: 'mirale yosman',
        capsule: 1,
        gender: 'F'
    },
    {
        name: 'natalie itzhak',
        capsule: 2,
        gender: 'F'
    },
    {
        name: 'netta avidan',
        capsule: 2,
        gender: 'F'
    },
    {
        name: 'netanel mazuz',
        capsule: 2,
        gender: 'M'
    },
    {
        name: 'sergey aronov',
        capsule: 5,
        gender: 'M'
    },
    {
        name: 'BARUH RAHEL',
        capsule: 4,
        gender: 'F'
    },
    {
        name: 'shir admon',
        capsule: 5,
        gender: 'F'
    },


]


function getAllGroup(groupNumber, users) {
    return new Promise((resolve, reject) => {
        if (groupNumber > 0 && groupNumber < 8) {
            setTimeout(() => {
                // let temp = [];
                // users.forEach((user)=>{
                //     temp.push({})
                // })
                // resolve(temp);
                let obj = {list : users.filter((u) => {
                        return u.capsule === groupNumber;
                    }) , groupNumber : groupNumber}
                resolve(obj)
            }, 1500)
        } else {
            reject('gourp number is wrong');
        }
    })
}


function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(19);
        }, 3000)
    })
}

// console.log('first')
// // console.log(test())
// test().then((data) => {
//     console.log(data)
// })
//
// console.log('end')

getAllGroup(1, users)
    .then((result)=>{
        console.log(result)
    }).catch((err)=>{
    console.log(err)
})

getAllGroup(8, users)
    .then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
