import "./App.css";

import { MdDelete, MdNoteAdd } from "react-icons/md";
import { Header } from "./components";

function App() {
  return (
    <div className="App container">
      <Header />

      <div className="toDoApp d-flex align-item-center justify-content-center w-100">
        <form className="w-50 ">
          <div className="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="اضافه کردن کار جدید"
            />
            <button class="btn" type="button" id="addTask">
              <MdNoteAdd size="40" />
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex align-items-center justify-content-center w-100 listOfToDos">
        <ul className="listOfToDos--items bg-light p-3 w-50 list-unstyled">
          <li className="listOfToDos--taskItem mb-3 w-100">
            <div className="input-group w-100">
              <div className="input-group-text w-100 d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="form-check-input mx-3"
                  style={{ width: "1.3rem", height: "1.3rem" }}
                />
                <h3 className="listOfToDos--task w-100 text-end m-0">
                  تمرین reactjs
                </h3>
                <button className="btn listOfToDos--deleteTask">
                  <MdDelete size="20" />
                </button>
              </div>
            </div>
          </li>
          <li className="listOfToDos--taskItem mb-3 w-100">
            <div className="input-group w-100">
              <div className="input-group-text w-100 d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="form-check-input mx-3"
                  style={{ width: "1.3rem", height: "1.3rem" }}
                />
                <h3 className="listOfToDos--task w-100 text-end m-0">
                  تمرین reactjs
                </h3>
                <button className="btn listOfToDos--deleteTask">
                  <MdDelete size="20" />
                </button>
              </div>
            </div>
          </li>
          <li className="listOfToDos--taskItem mb-3 w-100">
            <div className="input-group w-100">
              <div className="input-group-text w-100 d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="form-check-input mx-3"
                  style={{ width: "1.3rem", height: "1.3rem" }}
                />
                <h3 className="listOfToDos--task w-100 text-end m-0">
                  تمرین reactjs
                </h3>
                <button className="btn listOfToDos--deleteTask">
                  <MdDelete size="20" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <footer>
        <div className="">
          <ul className="">
            <li>
              <button className="btn ">همه</button>
            </li>
            <li>
              <button className="btn ">در حال انجام</button>
            </li>
            <li>
              <button className="btn ">به اتمام رسیده</button>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 ">3 items</div>
      </footer>
    </div>
  );
}

export default App;
