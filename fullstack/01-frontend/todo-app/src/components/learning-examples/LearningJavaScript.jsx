const person = {
    name: 'Jaeyoung',
    address: {
        line1: 'Baker Street',
        city: 'London',
        country: 'UK',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
        
        // console.log(person.profiles[0])
    }
}

// function printProfile() {
//     console.log(person.profiles[0])
// }

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}