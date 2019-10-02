const cards = [
    // {
    //     design: 'drivingLicence-provisional',
    //     data: {
    //         photo: require(`./assets/stock-passport-photo.jpg`),
    //         surname: 'SMITH',
    //         firstName: 'JOHN MICHAEL',
    //         dob: '31.12.1980',
    //         placeOfBirth: 'UNITED KINGDOM',
    //         dateOfIssue: '',
    //         dateOfExpiry: '',
    //         issuedBy: '',
    //         licenceNumber: '',
    //         validFrom: '',
    //         validTo: '',
    //         codes: '',
    //     }
    // }
];
const bankCards = [
    'appleCard',
    'monzo-hotCoral',
    'natwest-visaDebit',
    'revolut-metalBlack',
    'revolut-metalGold',
    'revolut-metalGrey',
    'revolut-metalRoseGold',
    'revolut-metalWhite',
    'revolut-plasticPurpleBlue',
    'revolut-plasticRoseGold',
];

for (let i = 0; i < bankCards.length; i++) {
    cards.push({
        design: bankCards[i],
        data: {
            longNumber: '4242 4242 4242 4242',
            accountHolder: 'MR JOHN SMITH',
            accountNumber: '0000 0000',
            sortCode: '00-00-00',
            expiryDate: '12/99',
            validFrom: '12/00',
            cvc: '123',
        }
    })
}

export default cards;

// export default [
// {
//     design: 'monzo-hotCoral',
//     data: {
//         longNumber: '4242 4242 4242 4242',
//         accountHolder: 'MR JOHN SMITH',
//         expiryDate: '01/12',
//         cvc: '123'
//     }
// },
// {
//     design: 'drivingLicence-provisional',
//     data: {
//         photo: require(`./assets/stock-passport-photo.jpg`),
//         surname: 'SMITH',
//         firstName: 'JOHN MICHAEL',
//         dob: '31.12.1980',
//         placeOfBirth: 'UNITED KINGDOM',
//         dateOfIssue: '',
//         dateOfExpiry: '',
//         issuedBy: '',
//         licenceNumber: '',
//         validFrom: '',
//         validTo: '',
//         codes: '',
//         // photo: 'http://lorempixel.com/400/200'
//     }
// },
// // {
// //     design: 'visa'
// // },
// {
//     design: 'natwest-visaDebit',
//     data: {
//         longNumber: '4242 4242 4242 4242',
//         accountHolder: 'MR JOHN SMITH',
//         expiryDate: '01/12',
//         cvc: '123'
//     }
// },
// {
//     design: 'revolut-plasticPurpleBlue',
//     data: {
//         longNumber: '132132132132'
//     }
// },
// {
//     design: 'revolut-plasticRoseGold',
//     data: {
//         longNumber: '132132132132'
//     }
// },
// ]
