import "./App.css";

function App() {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            {/*  Task Area*/}
            <div class="sider mt-5">
              <div class="dots">
                <div class="dot1"></div>
                <div class="dot2"></div>
                <div class="dot3"></div>
              </div>
              <div class="row">
                <div class="col-lg-9 mx-auto text-white">
                  <div class="my-name">
                    <h2>Hello, Guest !!!</h2>
                  </div>
                  <p>
                    All <span style={{color: '#FFBD44'}}>Task</span> List :(
                  </p>
                  <div class="uppertaskarea">
                    <div class="taskarea">
                      <div class="tasks">
                        <p>Task 1</p>
                        <div class="task-update-delete">
                          <div id="taskUpdate" class="update">
                            <a href="/task/61acbd0f3f4b820c9db67016">
                              <i class="fas fa-pen-square"></i>
                            </a>
                          </div>
                          <div class="delete">
                            <span onclick="deleteTask('61acbd0f3f4b820c9db67016')">
                              <i class="fas fa-times-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="tasks">
                        <p>Task 2</p>
                        <div class="task-update-delete">
                          <div id="taskUpdate" class="update">
                            <a href="/task/61accc0a7e5db14d35c3f7f8">
                              <i class="fas fa-pen-square"></i>
                            </a>
                          </div>
                          <div class="delete">
                            <span onclick="deleteTask('61accc0a7e5db14d35c3f7f8')">
                              <i class="fas fa-times-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="tasks">
                        <p>Test User</p>
                        <div class="task-update-delete">
                          <div id="taskUpdate" class="update">
                            <a href="/task/61acd62fb67e937a419931b6">
                              <i class="fas fa-pen-square"></i>
                            </a>
                          </div>
                          <div class="delete">
                            <span onclick="deleteTask('61acd62fb67e937a419931b6')">
                              <i class="fas fa-times-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="tasks">
                        <p>Test User</p>
                        <div class="task-update-delete">
                          <div id="taskUpdate" class="update">
                            <a href="/task/61acd62fb67e937a419931b6">
                              <i class="fas fa-pen-square"></i>
                            </a>
                          </div>
                          <div class="delete">
                            <span onclick="deleteTask('61acd62fb67e937a419931b6')">
                              <i class="fas fa-times-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="tasks">
                        <p>Test User</p>
                        <div class="task-update-delete">
                          <div id="taskUpdate" class="update">
                            <a href="/task/61acd62fb67e937a419931b6">
                              <i class="fas fa-pen-square"></i>
                            </a>
                          </div>
                          <div class="delete">
                            <span onclick="deleteTask('61acd62fb67e937a419931b6')">
                              <i class="fas fa-times-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="tasks">
                        <p>Test User</p>
                        <div class="task-update-delete">
                          <div id="taskUpdate" class="update">
                            <a href="/task/61acd62fb67e937a419931b6">
                              <i class="fas fa-pen-square"></i>
                            </a>
                          </div>
                          <div class="delete">
                            <span onclick="deleteTask('61acd62fb67e937a419931b6')">
                              <i class="fas fa-times-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="tasks">
                        <p>Test User</p>
                        <div class="task-update-delete">
                          <div id="taskUpdate" class="update">
                            <a href="/task/61acd62fb67e937a419931b6">
                              <i class="fas fa-pen-square"></i>
                            </a>
                          </div>
                          <div class="delete">
                            <span onclick="deleteTask('61acd62fb67e937a419931b6')">
                              <i class="fas fa-times-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
