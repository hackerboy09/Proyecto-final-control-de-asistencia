const modeloMaestro = {
    queryGetMaestro: "SELECT * FROM TbMaestro",
    querygetMaestroByID: `SELECT * FROM TbMaestro WHERE IntMaestro = ?`,
    queryMaestroExistente: `SELECT UserM FROM TbMaestro WHERE UserM = ?`,
    queryaddMaestro: `
    INSERT INTO TbMaestro (
        IntMaestro,
        StrNombre,
        StrApellido,
        IdGrupo,
        UserM,
        Activo
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?)`,
    queryGetMaestroInfo:
    `SELECT IntMaestro, StrNombre, StrApellido, IdGrupo, UserM, Activo 
            FROM TbMaestro 
            WHERE UserM = ?`
    }

    module.exports = modeloMaestro