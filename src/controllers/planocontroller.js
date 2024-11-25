import plano from "../models/planomodel.js"


export async function store (req, res) {
    const { id, refeicao, startDate, endDate } = req.body;
    try {
        const planoalimentar = await plano.create({id, refeicao, startDate, endDate })
        res.status(200).json(planoalimentar)
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function index (req, res) {
    try {
        const planoalimentar = await plano.find({ id: req.params.id }) .exec()
        res.status(200).json({mensagem: "Listado com sucesso"})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function update(req, res) {
    try {
        const planoalimentar = await plano.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "Atualizado com sucesso", planoalimentar})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}
export async function destroy(req, res) {
    try {
        const planoalimentar= await plano.findByIdAndDelete(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "deletado com sucesso", planoalimentar})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}