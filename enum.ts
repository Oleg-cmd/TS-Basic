enum Membership{
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard

const membershipReverse = Membership[2]

console.log(membershipReverse)
console.log(membership)

enum SocialMedia{
    VK = 'VK',
    Facebook = 'Facebook',
    Instagram = 'Instagram'
}

const social = SocialMedia.Instagram
console.log(social)