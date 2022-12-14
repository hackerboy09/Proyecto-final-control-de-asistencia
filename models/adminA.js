const modeloAlumno = {
    queryGetAlumno: "SELECT * FROM Tb_Alumno",
    querygetAlumnoByID: `SELECT * FROM Tb_Alumno WHERE Id_Alumno = ?`,
    queryAlumnoExistente: `SELECT strNombre FROM Tb_Alumno WHERE strNombre = ?`,
    queryaddAlumno: `
    INSERT INTO Tb_Alumno (
        Id_Alumno,
        Id_Grupo,
        strNombre,
        strApellido,
        Str_Materia
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?)`,
    queryGetAlumnoInfo:
    `SELECT Id_Alumno, Id_Grupo, strNombre, strApellido, Str_Materia 
            FROM Id_Alumno 
            WHERE strNombre = ?`
    }

    module.exports = modeloAlumno