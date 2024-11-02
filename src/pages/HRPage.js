import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HRPage = () => {
    const weeklyChartRef = useRef(null);
    const monthlyChartRef = useRef(null);
    const weeklyChartInstance = useRef(null);
    const monthlyChartInstance = useRef(null);

    useEffect(() => {
        // Configuración y creación de los gráficos
        if (weeklyChartRef.current && !weeklyChartInstance.current) {
            weeklyChartInstance.current = new Chart(weeklyChartRef.current, {
                type: 'bar',
                data: {
                    labels: ['Asistencias', 'Retardos', 'Faltas'],
                    datasets: [{
                        label: 'Estadísticas Semanales',
                        data: [30, 20, 20],
                        backgroundColor: ['green', 'yellow', 'red']
                    }]
                }
            });
        }

        if (monthlyChartRef.current && !monthlyChartInstance.current) {
            monthlyChartInstance.current = new Chart(monthlyChartRef.current, {
                type: 'bar',
                data: {
                    labels: ['Asistencias', 'Retardos', 'Faltas'],
                    datasets: [{
                        label: 'Estadísticas Mensuales',
                        data: [15, 10, 5],
                        backgroundColor: ['orange', 'yellow', 'purple']
                    }]
                }
            });
        }

        // Limpieza de los gráficos al desmontar el componente
        return () => {
            if (weeklyChartInstance.current) {
                weeklyChartInstance.current.destroy();
                weeklyChartInstance.current = null;
            }
            if (monthlyChartInstance.current) {
                monthlyChartInstance.current.destroy();
                monthlyChartInstance.current = null;
            }
        };
    }, []);

    // Definición de la función showSection para manejar cambios de sección
    const showSection = (section) => {
        console.log(`Cambiar a la sección: ${section}`);
        // Implementa aquí cualquier lógica adicional para cambiar de sección
    };

    return (
        <div className="container mt-5">
            <ul className="nav nav-pills mt-3 d-flex justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={() => showSection('inicio')}>Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => showSection('docentes')}>Docentes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => showSection('reportes')}>Reportes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => showSection('ajustes')}>Ajustes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={() => showSection('salir')}>Salir</a>
                </li>
            </ul>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-white bg-success">ASISTENCIAS</div>
                        <div className="card-body">
                            <h1>30</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-white bg-warning">RETARDOS</div>
                        <div className="card-body">
                            <h1>20</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-white bg-danger">FALTAS</div>
                        <div className="card-body">
                            <h1>20</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Estadísticas Semanales</div>
                        <div className="card-body">
                            <canvas ref={weeklyChartRef} id="weeklyChart"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Estadísticas Mensuales</div>
                        <div className="card-body">
                            <canvas ref={monthlyChartRef} id="monthlyChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRPage;
