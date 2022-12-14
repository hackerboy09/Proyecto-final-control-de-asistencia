const modeloAdmin = {
queryGetAlumnoconMaestro: "SELECT * FROM tb_alumno a LEFT JOIN tbmaestro M ON a.Id_Grupo = M.IdGrupo WHERE M.IdGrupo = 1",
queryeliminarporID: `UPDATE TbAdministrador SET Activo = 'N' WHERE ID = ?`,
queryAdministradorExistente: `SELECT Usuario FROM TbAdministrador WHERE Usuario = ?`,
queryaddAdministrador: `
INSERT INTO TbAdministrador (
        strNombre,
        strApellido,
        Usuario,
        Contrasena,
        Activo
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?)`,
queryIniciarSA: `SELECT Usuario, Contrasena, Activo FROM TbAdministrador WHERE Usuario = ?`  

}
    module.exports = modeloAdmin