import React from 'react'
import Posts from './Posts'


  const carditem = [ 
         {
             id:1,
             logo:'https://images.nintendolife.com/0914c8865bb51/1280x720.jpg',
             small:'Abdul Waheed Likes this',
             user:'https://images.nintendolife.com/0914c8865bb51/1280x720.jpg',
             title:'Agile District',
             experience:'91 Followers',
             time:'2h',
             desc1:'#New#Fresher',
             desc2:'#Fresher#Internship',
             desc3:'',
             desc4:'',
             image:'https://www.lma-consultinggroup.com/wp-content/uploads/opportunitiy.jpg',
             likes:'You and 3,402 others',
             comments:'2.k comments',
             shares:'345 shares'
         },
         {
            id:2,
            logo:'https://media.licdn.com/dms/image/D4D03AQG_yBAZIj5HEw/profile-displayphoto-shrink_800_800/0/1673325685390?e=2147483647&v=beta&t=vcWkRi87HZun0y1e2m1pumajb1_BGSJ2aRmjJFHH9UA',
            small:'Zain Fiaz Likes this',
            user:'https://media.licdn.com/dms/image/D4D03AQG_yBAZIj5HEw/profile-displayphoto-shrink_800_800/0/1673325685390?e=2147483647&v=beta&t=vcWkRi87HZun0y1e2m1pumajb1_BGSJ2aRmjJFHH9UA',
            title:'Muhammad Zubair',
            experience:'React Native  ||  React js || Node js || Apollo || GraphQL',
            time:'3mo',
            desc1:'just wait',
            desc2:'',
            desc3:'',
            desc4:'#Happy#New#Year',
            image:'https://first-wishes.com/media/item/lb80bb7s.jpg',
            likes:'Zain Fiaz 1,909 others',
            comments:'234 comments ',
            shares:'34 shares'
        },
        {
            id:3,
            logo:'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/01/27/Photos/Processed/MarkusDohle-k8y--621x414@LiveMint.jpg',
            small:'Ahmad Naveed likes this',
            user:'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/01/27/Photos/Processed/MarkusDohle-k8y--621x414@LiveMint.jpg',
            title:'Amazon',
            experience:'Internet Seattle WA',
            time:'2mo',
            desc1:'Amazon',
            desc2:'',
            desc3:'',
            desc4:'#New#Logo',
            image:'https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg',
            likes:'1.9m likes',
            comments:'290k comments',
            shares:'30k shares'
        },
      {
         id:5,
         logo:'data:image/jpeg;base64,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',
         small:'Shazia Shakil Likes this',
         user:'data:image/jpeg;base64,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',
         title:'Aliplay',
         experience:'Good Experience',
         time:'1ye',
         desc1:'#Feel#happy',
         desc2:'',
         desc3:'',
         desc4:'#Joined',
         image:'https://happier1.imgix.net/img/blog/20150319-20150319-shutterstock_81215629.jpg?w=700',
         likes:'Zain Fiaz 1,909 others',
         comments:'234 comments ',
         shares:'34 shares'
     },
     {
         id:6,
         logo:'https://executiveapparel.com/wp-content/uploads/2016/05/C3000-blazer-ultralux-boys-nvy-copy.jpg',
         small:'Zubair Butt likes this',
         user:'https://executiveapparel.com/wp-content/uploads/2016/05/C3000-blazer-ultralux-boys-nvy-copy.jpg',
         title:'Shaista Awan',
         experience:'',
         time:'1we',
         desc1:'#Eid#Mubarak',
         desc2:'#Happiness',
         desc3:'#Celebrating',
         desc4:'',
         image:'https://cdn.zeebiz.com/sites/default/files/2023/04/08/235836-mosque-51296601920.png',
         likes:'1.9m likes',
         comments:'290k comments',
         shares:'30k shares'
     },
     {
        id:7,
        logo:'https://thumbs.dreamstime.com/b/executive-woman-27308990.jpg',
        small:'Abdul Waheed Likes this',
        user:'https://thumbs.dreamstime.com/b/executive-woman-27308990.jpg',
        title:'Safa Saida',
        experience:'91 Followers',
        time:'2h',
        desc1:'#Car#Work',
        desc2:'#New#Model',
        desc3:'',
        desc4:'',
        image:'https://images.moneycontrol.com/static-mcnews/2022/01/BMW%E2%80%99s-iX-Flow-650x435.jpg?impolicy=website&width=770&height=431',
        likes:'You and 3,402 others',
        comments:'2.k comments',
        shares:'345 shares'
    },
    {
       id:8,
       logo:'https://img.freepik.com/free-photo/elegant-businessman-office_155003-9641.jpg?w=2000',
       small:'Zain Fiaz Likes this',
       user:'https://img.freepik.com/free-photo/elegant-businessman-office_155003-9641.jpg?w=2000',
       title:'John Doe',
       experience:'React Native  ||  React js || Node js || Apollo || GraphQL',
       time:'3mo',
       desc1:'just wait',
       desc2:'',
       desc3:'',
       desc4:'#Happy#New#Year',
       image:'https://thumbs.dreamstime.com/b/road-disappears-view-sunset-text-new-beginning-asphalt-lit-light-distance-front-sun-concept-starting-96650532.jpg',
       likes:'Zain Fiaz 1,909 others',
       comments:'234 comments ',
       shares:'34 shares'
   },
  
]

function Postcard() {
    // console.log("props data from post card",props)
  return (
    <div className=' sm:mt-6 md:mt-6 lg:mt-0'>
        {carditem?.map((item) => (
            <Posts {...item}/>
        ))}
    </div>
  )
}

export default Postcard
















// function Postcard(props) {
//     console.log("props data from post card",props)
//   return (
//     <div className=' sm:mt-6 md:mt-6 lg:mt-0'>
//         {props.data?.map((item) => (
//             <Posts {...item}/>
//         ))}
//     </div>
//   )
// }

// export default Postcard