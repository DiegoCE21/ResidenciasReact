import React, { useEffect } from 'react';
import styles from "../styles/Docente.module.css";

const TeacherPage = () => {
    useEffect(() => {
        // Agregar la clase para aplicar estilos específicos
        document.body.classList.add(styles.docenteBody);

        // Cleanup: Eliminar clase al desmontar el componente
        return () => {
            document.body.classList.remove(styles.docenteBody);
        };
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-dark`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="fas fa-chalkboard-teacher"></i> Sistema Docente
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-user"></i> Perfil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-file-alt"></i> Justificantes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><i className="fas fa-sign-out-alt"></i> Salir</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Contenido principal */}
            <div className="container mt-5">
                <h1>Bienvenido Docente</h1>

                {/* Score de asistencias */}
                <div className={`${styles.scoreBox} score-box text-center mt-4`}>
                    <h2>Score de Asistencias</h2>
                    <p>Asistencias: <span id="asistencias">0</span></p>
                    <p>Faltas: <span id="faltas">0</span></p>
                </div>

                {/* Formulario de justificación */}
                <div className={`${styles.formContainer} form-container mt-5`}>
                    <h2>Justificar Faltas o Retardos</h2>
                    <form id="justificarFaltasForm" method="POST" action="justificar.php" encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="fechaFalta" className="form-label">Fecha de la Falta:</label>
                            <input type="date" id="fechaFalta" name="fechaFalta" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="motivo" className="form-label">Motivo de la Justificación:</label>
                            <textarea id="motivo" name="motivo" className="form-control" rows="3" required></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="documento" className="form-label">Subir Documento (opcional):</label>
                            <input type="file" id="documento" name="documento" className="form-control" accept="application/pdf" />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Enviar Justificación</button>
                    </form>
                </div>
            </div>

            {/* Scripts */}
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
        </div>
    );
};

export default TeacherPage;
