const modeloAdmintwo = {
    queryGetAcMTwo: "SELECT * FROM tb_alumno a LEFT JOIN tbmaestro M ON a.Id_Grupo = M.IdGrupo WHERE M.IdGrupo = 2;"

}
    module.exports = modeloAdmintwo