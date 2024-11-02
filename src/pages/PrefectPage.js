import React, { useState } from 'react';
import styles from '../styles/Prefecta.module.css';

const RegistroAsistencias = () => {
  const [asistencias, setAsistencias] = useState([
    { nombre: 'Juan Pérez', hora: '08:00 AM', aula: 'Aula 101', estado: null },
    { nombre: 'Ana López', hora: '09:00 AM', aula: 'Aula 202', estado: null },
    { nombre: 'Pedro Sánchez', hora: '10:00 AM', aula: 'Aula 303', estado: null },
  ]);

  const handleEstadoChange = (index, estado) => {
    const nuevasAsistencias = [...asistencias];
    nuevasAsistencias[index].estado = estado;
    setAsistencias(nuevasAsistencias);
  };

  const resetEstado = (index) => {
    const nuevasAsistencias = [...asistencias];
    nuevasAsistencias[index].estado = null;
    setAsistencias(nuevasAsistencias);
  };

  return (
    <div className={`container-fluid ${styles.container}`}>
      <header className={`header ${styles.header}`}>
        <h1>Registro de Asistencias</h1>
        <a href="/" className={`btn btn-logout ${styles.btnLogout}`}>
          <i className="material-icons">logout</i>
          Salir
        </a>
      </header>

      <div className={`table-container ${styles.tableContainer}`}>
        <table className={`table ${styles.table}`}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Hora</th>
              <th>Aula</th>
              <th>Estado de Asistencia</th>
            </tr>
          </thead>
          <tbody>
            {asistencias.map((asistente, index) => (
              <tr key={index}>
                <td>{asistente.nombre}</td>
                <td>{asistente.hora}</td>
                <td>{asistente.aula}</td>
                <td
                  className={`${styles.estadoCelda} ${styles[asistente.estado]}`}
                  onClick={() => resetEstado(index)}
                >
                  {asistente.estado ? (
                    <i className="material-icons">
                      {asistente.estado === 'presente' ? 'check_circle' : 
                      asistente.estado === 'ausente' ? 'cancel' : 'access_time'}
                    </i>
                  ) : (
                    <div className={`${styles.btnGroup} d-flex justify-content-center`}>
                      <button
                        className={`btn btn-success btn-sm ${styles.btnCircle}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEstadoChange(index, 'presente');
                        }}
                      >
                        <i className="material-icons">check_circle</i>
                      </button>
                      <button
                        className={`btn btn-danger btn-sm ${styles.btnCircle}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEstadoChange(index, 'ausente');
                        }}
                      >
                        <i className="material-icons">cancel</i>
                      </button>
                      <button
                        className={`btn btn-warning btn-sm ${styles.btnCircle}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEstadoChange(index, 'tarde');
                        }}
                      >
                        <i className="material-icons">access_time</i>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistroAsistencias;
