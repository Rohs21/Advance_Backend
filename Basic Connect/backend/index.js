import express from 'express';

const app = express();



const port = process.env.PORT || 3000;

app.get ( "/jokes", (req,res)=>{
    const joke = [
        {
            id: 1,
            title: '1st joke',
            content: 'this is 1st joke',
        },
        {
            id: 2,
            title: '2nd joke',
            content:'This is second joke',
        },
        {
            id: 3,
            title:'3rd joke',
            content:'this is 3rd joke',
        },
    ]
    res.send(jokes);
})


app.listen(port, ()=>{
    console.log('port start');
});