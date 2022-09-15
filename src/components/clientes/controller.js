import * as DB from '../../db'

export const findAll = (req,res) => {
    return res.json({
        ok:true,
        data:DB.findAll()
    })
}

