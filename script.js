// 도서번호 초기값 설정
let nextBookNumber = 1;

function registerBook() {
    const category = document.getElementById('category').value;
    const bookname = document.getElementById('bookname').value.trim();
    const bookprice = document.getElementById('bookprice').value.trim();


    // 중복체크 부분
    const rows = Array.from(document.querySelectorAll('#book-list-tbody tr'));
        const duplicate = rows.some(row => {
            const cells = row.querySelectorAll('td');
            return cells[1].textContent === category && cells[2].textContent === bookname;
    });

        if (duplicate) {
            alert("이미 등록된 도서입니다.");
            return;
    }

    // alert 창 생성 부분
    if (!category) {
        alert("카테고리를 선택해주세요");
        return;
    }
    if (!bookname) {
        alert("도서명을 작성해주세요");
        return;
    }
    if (!bookprice) {
        alert("가격을 작성해주세요");
        return;
    }

    const newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${nextBookNumber++}</td>
        <td>${category}</td>
        <td>${bookname}</td>
        <td>${bookprice}</td>
        <td><button class="delete-btn">삭제</button></td>
    `;

    document.getElementById('book-list-tbody').appendChild(newRow);

    document.getElementById('book-form').reset();

    alert("도서가 성공적으로 등록되었습니다.");
}

    // 도서목록 리스트 삭제 클릭 이벤트 리스너
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('book-list-tbody').addEventListener('click', (e) => {

        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('tr').remove();
        }
    });
});
