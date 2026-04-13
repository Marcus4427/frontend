import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

function Dashboard(){
    return (
    <div>
        <Sidebar />
        <main>
            <Topbar />
            <h2>Bem-vindo ao portal do aluno</h2>
            <section>
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    </div>
    );
}

export default Dashboard;