// src/components/AdminPage.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "../styles/Admin.module.css";
import Inicio from "../assets/inicio.png";

const AdminPage = () => {
  // Usamos useRef para guardar las referencias de los gráficos
  const asistenciaChartRef = useRef(null);
  const retardosChartRef = useRef(null);

  useEffect(() => {
    // Configuración de la gráfica de Asistencias
    const ctxAsistencia = document
      .getElementById("asistenciaChart")
      .getContext("2d");

    // Verificamos si ya existe un gráfico y lo destruimos
    if (asistenciaChartRef.current) {
      asistenciaChartRef.current.destroy();
    }

    asistenciaChartRef.current = new Chart(ctxAsistencia, {
      type: "bar",
      data: {
        labels: ["Asistencias", "Retardos", "Faltas"],
        datasets: [
          {
            label: "Estadísticas Semanales",
            data: [30, 20, 20], // Simulación de datos
            backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
            borderColor: ["#388E3C", "#FFA000", "#D32F2F"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Configuración de la gráfica de Retardos
    const ctxRetardos = document
      .getElementById("retardosChart")
      .getContext("2d");

    // Verificamos si ya existe un gráfico y lo destruimos
    if (retardosChartRef.current) {
      retardosChartRef.current.destroy();
    }

    retardosChartRef.current = new Chart(ctxRetardos, {
      type: "bar",
      data: {
        labels: ["Asistencias", "Retardos", "Faltas"],
        datasets: [
          {
            label: "Estadísticas Mensuales",
            data: [5, 10, 8], // Simulación de datos
            backgroundColor: ["#FFC107", "#FF5722", "#9C27B0"],
            borderColor: ["#FFA000", "#E64A19", "#7B1FA2"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy charts on component unmount
    return () => {
      if (asistenciaChartRef.current) {
        asistenciaChartRef.current.destroy();
      }
      if (retardosChartRef.current) {
        retardosChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.AdminBody}>
      <div className={styles.container}>
        <nav className={styles.sidebar}>
          <div className={styles["sidebar-header"]}>
            <h2>Pedro Pablo Martinez Carmona</h2>
          </div>
          <ul className={styles.menu}>
            <li>
              <a href="#" onClick={() => mostrarSeccion("inicio-section")}>
                <i className="fas fa-home"></i> Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => mostrarSeccion("asignacion-recorrido")}
              >
                <i className="fas fa-user"></i> Asignación
              </a>
            </li>
            <li>
              <a href="#" onClick={() => mostrarSeccion("docentes-section")}>
                <i className="fas fa-chalkboard-teacher"></i> Docentes
              </a>
            </li>
            <li>
              <a href="#" onClick={() => mostrarSeccion("reportes-section")}>
                <i className="fas fa-warehouse"></i> Reportes
              </a>
            </li>
            <li>
              <a href="#" onClick={() => mostrarSeccion("ajustes-section")}>
                <i className="fas fa-cogs"></i> Ajustes
              </a>
            </li>
            <li>
              <a href="index.php">
                <i className="fas fa-sign-out-alt"></i> Salir
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles["main-content"]}>
          <header className={styles.header}>
            {/* Contenido de encabezado si es necesario */}
          </header>

          {/* Sección de Inicio */}
          <div id="inicio-section" className={styles["inicio-section"]}
            style={{ display: "block" }}
          >
            <section className={styles.statistics}>
            <div className={`${styles.green} ${styles.stat}`}>
                <p>ASISTENCIAS</p>
                <h3>30</h3>
            </div>
              <div className={`${styles.yellow} ${styles.stat}`}>
                <p>RETARDOS</p>
                <h3>20</h3>
              </div>
              <div className={`${styles.red} ${styles.stat}`}>
                <p>FALTAS</p>
                <h3>20</h3>
              </div>
            </section>
            <section className={styles.charts}>
              <div className={styles.chart}>
                <h4>Estadísticas Semanales</h4>
                <canvas id="asistenciaChart"></canvas>
              </div>
              <div className={styles.chart}>
                <h4>Estadísticas Mensuales</h4>
                <canvas id="retardosChart"></canvas>
              </div>
            </section>
          </div>

          {/* Sección de Asignación */}
          <div
            id="asignacion-recorrido"
            className={styles["asignacion-recorrido"]}
            style={{ display: "none" }}
          >
            <h2>Asignación de Recorrido</h2>
            <div className={styles["form-group"]}>
              <label htmlFor="nombre-select">Nombre:</label>
              <select name="select">
                <option value="value1">Lourdes Hernandez Lopez</option>
                <option value="value2" selected>
                  Maria Torres Vallejo
                </option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <form method="post" action="/send/">
                <br />
                <label htmlFor="area-select">Área:</label>
                <input type="checkbox" name="nickname" /> Admnistrativo
                <input type="checkbox" name="nickname" /> Ciencias Basicas
                <input type="checkbox" name="nickname" /> Ciencias de la tierra
                <input type="checkbox" name="nickname" /> Sistemas y Computación
                <input type="checkbox" name="nickname" /> Ciencias económico y
                administrativo
                <br />
                <button name="button">Enviar</button>
              </form>
            </div>
          </div>

          {/* Sección de Docentes */}
          <div
            id="docentes-section"
            className={styles["docentes-section"]}
            style={{ display: "none" }}
          >
            <input type="text" placeholder="Buscar Docente" />
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Hora Entrada</th>
                  <th>Hora Salida</th>
                  <th>Área</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan Pérez</td>
                  <td>08:00 AM</td>
                  <td>02:00 PM</td>
                  <td>02:00 PM</td>
                </tr>
                <tr>
                  <td>María García</td>
                  <td>09:00 AM</td>
                  <td>03:00 PM</td>
                  <td>02:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Sección de Reportes */}
          <div
            id="reportes-section"
            className={styles["docentes-section"]}
            style={{ display: "none" }}
          >
            <input type="text" placeholder="Buscar Docente" />
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Dia</th>
                  <th>Aula</th>
                  <th>Hora de Entrada</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan Pérez</td>
                  <td>08:00 AM</td>
                  <td>02:00 PM</td>
                  <td>02:00 PM</td>
                  <td>02:00 PM</td>
                </tr>
                <tr>
                  <td>María García</td>
                  <td>09:00 AM</td>
                  <td>03:00 PM</td>
                  <td>02:00 PM</td>
                  <td>02:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Sección de Ajustes */}
          <div
            id="ajustes-section"
            className={styles["asignacion-recorrido"]}
            style={{ display: "none" }}
          >
            <img src={Inicio} alt="Photo Load" width="150" height="150" />
            <h2>PEDRO PABLO MARTINEZ CARMONA</h2>
            <center>
              <label htmlFor="usr">
                <b>Usuario</b>
              </label>
              <input
                type="text"
                placeholder="Cambiar usuario"
                name="role"
                id="usr"
                required
              />
              <label htmlFor="psw">
                <b>Contraseña</b>
              </label>
              <input
                type="password"
                placeholder="Cambiar contraseña"
                name="psw"
                required
              />
            </center>
            <button name="button">Actualizar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Función auxiliar para mostrar secciones
function mostrarSeccion(seccionId) {
  const secciones = [
    "inicio-section",
    "asignacion-recorrido",
    "docentes-section",
    "reportes-section",
    "ajustes-section",
  ];
  secciones.forEach((id) => {
    document.getElementById(id).style.display =
      id === seccionId ? "block" : "none";
  });
}

export default AdminPage;
