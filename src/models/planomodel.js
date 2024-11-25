import { Schema, model } from "mongoose";

const planomodel = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    refeicao: [
        {
            typerefeicao: {
                type: String,
                required: true
            },
            items: [String],
        }],
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
},
    { timestamps: true }
)
export default model("plano", planomodel)