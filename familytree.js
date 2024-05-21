let theJonathans = {
    children: [
        {
            name: 'Elias'
        },
        {
            name: 'Sarah',
            children: [
                {
                    name: 'Max',
                    children: [{
                        name: 'Lily'
                    }]
                },
                {
                    name: 'Zoe'
                },
                {
                    name: 'Theo'
                }
            ]
        },
        {
            name: 'Maria',
            children: [
                {
                    name: 'Daniel'
                }
            ]
        },
        {
            name: 'David'
        }
    ]
};

let consolidatedNames = [];
function getMyDescedantNames(familyTree) {

    let children = [] = familyTree.children;

    children.forEach(function (child) {
        consolidatedNames.push(child.name);

        if (child.children) {
            getMyDescedantNames(child);
        }


    });
}

getMyDescedantNames(theJonathans);

 console.log(consolidatedNames);