import User from"../models/usuariomodel.js";

// Registro do usuário
export async function registro (req, res) {
    const { name, email, password } = req.body;
    try {
        const novoUsuario = await User.create({ name, email, password });
        res.status(201).json({ message: "Usuário registrado com sucesso.", user: novoUsuario });
    } catch (error) {
        res.status(500).json({ message: "Erro ao registrar usuário.", error: error.message });
    }
};
export async function login (req, res)  {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "Usuário não encontrado." });

        if (user.password !== password) return res.status(401).json({ message: "Senha inválida." });

        res.status(200).json({ message: "Login realizado com sucesso.", user });
    } catch (error) {
        res.status(500).json({ message: "Erro no login.", error: error.message });
    }
};
