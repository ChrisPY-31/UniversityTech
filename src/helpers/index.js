export const roleFormateado = (role) =>{
    const roleMap = {
        "admin": "Administrador",
        "instructor": "Instructor",
        "student": "Estudiante"
    }
    return roleMap[role] || "Desconocido";
}