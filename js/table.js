// ============================================================
// 表格的增删改查 —— DOM 节点操作
//
// 【核心口诀】
//   往「表格/表格区域」里加一行  → insertRow()
//   往「某一行」里加一个格子    → insertCell()
//   你之前把 insertRow 用在了"行"上，所以报 insertRow is not a function
// ============================================================

// ---------- 1. 新增一行 ----------
function addRow() {
    var table = document.getElementById('table');

    // insertRow(-1) = 追加到最后一行（-1 是"末尾"的简写，比写 rows.length 更直观）
    // 也可以写 table.insertRow(table.rows.length)
    var length=table.rows.length;
    var newrow = table.insertRow(length);

    // 关键：行里加格子用 insertCell(位置)，位置从 0 开始数
    var namecol = newrow.insertCell(0);      // 第 0 格：姓名
    var numbercol = newrow.insertCell(1);    // 第 1 格：联系方式
    var actioncol = newrow.insertCell(2);    // 第 2 格：操作
    namecol.innerHTML='未命名';
    numbercol.innerHTML='无';
    actioncol.innerHTML='<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>'
}
    function deleteRow(button){
    var row=button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    }
    function editRow(button){
    var row=button.parentNode.parentNode;
    var name=row.cells[0];
    var number=row.cells[1];
    var inputname=prompt("请输入名字:");
    var inputnumber=prompt("请输入联系方式:");
    name.innerHTML=inputname;
    number.innerHTML=inputnumber;
      
    }