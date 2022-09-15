import * as DBP from '../../db/index-productos'

export const findAll = (req, res) => {
    return res.json({
        ok:true,
        data:DBP.findAll()
    })
}