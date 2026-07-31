import './App.css'
import penIcon from "./assets/edit.svg"
import trashIcon from "./assets/delet.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [tasklist, setTasklist] = useState([]);
  const [TaskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);
  const [id, setId] = useState(null);


  const getTasks = async () => {
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoint")
      const APIData = await APIReturn.data
      //atualiza o states
      setTasklist(APIData)
    } catch (error) {
      console.log(error)
    }
  }

  const getTaskById = (id) => {
    alert(`Função getTaskById em desencolvimento ${id}`)
  }

  const postTask = async (e) => {
    e.preventDefault();
    if (TaskValue.trim().length == 0) {
      alert("Preencher o campo valor")
      return false;
    }
    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoint", {
        descricao: TaskValue,
      })
      const dadosCadastrados = await APIReturn.data
      setTasklist([...tasklist, dadosCadastrados])
    } catch (error) {
      console.log()
    }

  }

  //pré-editar
  const putTask = (item) => {
    setEditMode(true)
    setId(item.id)
    setTaskValue(item.descricao)
  }

  const confimPutTask = async (e) => {
    e.preventDefault()
    if (TaskValue.trim().length == 0) {
      alert("preencha o texto tarefa");
      return false;
    }


    try {
      const APIReturn = await axios.put(
        `http://localhost:3000/taskpoint/${id}`, {
        descricao: TaskValue
      }
      );
      setIdToEdit(0)
      setTaskValue("")
      getTasks()
      setEditMode(false)
      alert("A tarefa foi editada")

    } catch (error) {
      alert("erro ao editar")
      console.log(error)
    }
  }

  const deletTask = async (id) => {
    const querExcluir = confirm("Atenção: Quer realmente excluir?")
    if (!querExcluir) return false;

    try {
      const APIReturn = await axios.delete(
        `http://localhost:3000/taskpoint/${id}`,
      );
      getTasks();
      alert("Tarefa excluida com sucesso");
    } catch (error) {
      console.log(error);

      alert("erro ao excluir a tarefa");
    }
  };

  //efects e ciclo de vida do componente

  //onMount - quando o componente for montado
  useEffect(() => {
    //carrega os dados quando o componente for montado!
    getTasks()
  }, [])

  //JSX
  return (
    <>
      <header className="header-section">
        <h1 className="header-section__title">React List</h1>
      </header>

      <main className="body-section">
        <form className="cad-task" onSubmit={editMode ? confimPutTask : postTask}>
          <input className="card-task__entry"
            type="text"
            placeholder='Adicione uma tarefa'
            value={TaskValue}
            onChange={(e) => {
              setTaskValue(e.target.value)
            }}
          />
          <p>{TaskValue}</p>
          <button className="card-task__btn-confirm">Adicionar</button>


          {editMode &&
            <button
              className="card-task__btn-confirm"
              type="button"
              onClick={() => {
                setTaskValue("")
                setIdToEdit(0)
                setEditMode(false)
              }}
            >
              Cancelar
            </button>
          }


        </form>

        <section className="cardlist">

          {
            tasklist.map((t) => {
              return (
                <article className="cardtask" key={t.id}>
                  <p className='cardtask__tasc-text'>
                    {t.descricao}
                  </p>

                  <div className="carstask__icon-box">

                    <div className='cardlist__icon'>
                      <img
                        src={penIcon}
                        className='cardlist__edit-icon'
                        alt="imagem de um lapis. Função de editar"
                        onClick={() => {
                          putTask(t)
                        }} />
                    </div>

                    <div className='cardlist__icon'>
                      <img
                        src={trashIcon}
                        className='delet-icon'
                        alt="imagem de uma lixeira. Função de excluir"
                        onClick={() => {
                          deletTask(t.id)
                        }}
                      />
                    </div>
                  </div>

                </article>
              )
            })
          }




        </section>
      </main>

      <footer className="footer-list">
        <p className="footer-list__right-text">2026, React List - Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default App
