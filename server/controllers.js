module.exports={
    create:(req,res)=>{
        let db=req.app.get('db')
        const {user_id, barber_id, time}=req.body;

        db.create_appointment([user_id, barber_id, time]).then(response=>{
            res.status(200).send(response)
        }).catch(err=>{
            res.status(500).send(err)
        })
    },

    read:(req,res)=>{
        let db=req.app.get('db')
        db.get_appointment().then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            res.status(500).send(err)
        })
    },

    update:(req,res)=>{
        let db=req.app.get('db')
        let {id}=req.params
        let {user_id, barber_id, time}=req.body

        db.update_appointment([id, user_id, barber_id, time]).then(response=>{
            res.status(200).send(response)
        })
    },

    delete:(req,res)=>{
        let db=req.body.get('db')
        let {id}=req.params

        db.delete_appointment({id}).then(response=>{
            res.status(200).send(response)
        })
    }
}
  