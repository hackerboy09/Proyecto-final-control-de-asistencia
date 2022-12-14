const modeloLista = {
    queryGetPaselista: "SELECT * FROM tbasistencia L LEFT JOIN tb_alumno A ON A.Id_Alumno = L.Id_Grupo;",
    queryListaExistente: `SELECT Id_Alumno FROM TbAsistencia WHERE Id_Alumno = ?`,
    queryaddPuntualidad: `
    INSERT INTO TbAsistencia (
        Id_Alumno,
        Fecha,
        Estatus
    ) VALUES (
        ?,
        ?,
        ?)`
    }

    module.exports = modeloLista