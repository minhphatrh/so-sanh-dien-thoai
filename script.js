/* ========================================
   1. DỮ LIỆU 4 ĐIỆN THOẠI MẪU
   ======================================== */

/*
 * Giá bán và thông số chỉ mang tính minh họa.
 * Không phải dữ liệu giá hiện hành của CellphoneS.
 * Hình ảnh cần kết nối Internet để tải từ nguồn bên ngoài.
 */

const products = [
    {
        id: "phone-a",
        brand: "Apple",
        name: "iPhone 16",
        price: 19990000,
        display: "6,1 inch OLED",
        storage: "128 GB",
        camera: "Camera chính 48 MP",
        battery: "3.561 mAh (minh họa)",
        image:
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        alt: "Hình minh họa điện thoại iPhone 16"
    },
    {
        id: "phone-b",
        brand: "Samsung",
        name: "Galaxy S25",
        price: 22990000,
        display: "6,2 inch Dynamic AMOLED",
        storage: "256 GB",
        camera: "Camera chính 50 MP",
        battery: "4.000 mAh (minh họa)",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        alt: "Hình minh họa điện thoại Samsung Galaxy S25"
    },
    {
        id: "phone-c",
        brand: "Xiaomi",
        name: "Xiaomi 14T Pro",
        price: 13990000,
        display: "6,67 inch AMOLED",
        storage: "256 GB",
        camera: "Camera chính 50 MP",
        battery: "5.000 mAh (minh họa)",
        image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        alt: "Hình minh họa điện thoại Xiaomi 14T Pro"
    },
    {
        id: "phone-d",
        brand: "OPPO",
        name: "OPPO Reno13 5G",
        price: 12990000,
        display: "6,59 inch AMOLED",
        storage: "256 GB",
        camera: "Camera chính 50 MP",
        battery: "5.600 mAh (minh họa)",
        image:
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&q=80",
        alt: "Hình minh họa điện thoại OPPO Reno13 5G"
    }
];


/* ========================================
   2. KHAI BÁO BIẾN VÀ PHẦN TỬ HTML
   ======================================== */

const MAX_SELECTION = 4;

/*
 * Set lưu ID của các sản phẩm được chọn.
 * Set giúp tránh lưu trùng cùng một sản phẩm.
 */
const selectedIds = new Set();

const productGrid = document.querySelector("#product-grid");
const selectionCount = document.querySelector("#selection-count");
const clearButton = document.querySelector("#clear-selection");

const emptyState = document.querySelector("#empty-state");
const tableScroll = document.querySelector("#table-scroll");
const comparisonHead = document.querySelector("#comparison-head");
const comparisonBody = document.querySelector("#comparison-body");
const comparisonHelp = document.querySelector("#comparison-help");
const tableHint = document.querySelector("#table-hint");


/* ========================================
   3. ĐỊNH DẠNG GIÁ TIỀN
   ======================================== */

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}


/* ========================================
   4. HIỂN THỊ DANH SÁCH SẢN PHẨM
   ======================================== */

function renderProductCards() {
    productGrid.innerHTML = products.map((product) => {
        const isSelected = selectedIds.has(product.id);

        /*
         * Nếu đã chọn đủ số lượng tối đa,
         * vô hiệu hóa nút của sản phẩm chưa chọn.
         */
        const isLimitReached =
            selectedIds.size >= MAX_SELECTION && !isSelected;

        return `
            <article class="product-card ${
                isSelected ? "is-selected" : ""
            }">

                <div class="product-image-wrap">
                    <img
                        class="product-image"
                        src="${product.image}"
                        alt="${product.alt}"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='https://placehold.co/400x400/f3f4f6/555?text=Phone';"
                    >
                </div>

                <p class="product-brand">
                    ${product.brand}
                </p>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-price">
                    ${formatPrice(product.price)}
                </p>

                <p class="product-meta">
                    ${product.display} · ${product.storage}
                </p>

                <button
                    class="compare-toggle"
                    type="button"
                    data-product-id="${product.id}"
                    aria-pressed="${isSelected}"
                    ${isLimitReached ? "disabled" : ""}
                    aria-label="${
                        isSelected ? "Bỏ " : "Chọn "
                    }${product.name} ${
                        isSelected ? "khỏi" : "để"
                    } so sánh"
                >
                    <span aria-hidden="true">
                        ${isSelected ? "✓" : "+"}
                    </span>

                    ${isSelected ? "Đã chọn" : "Chọn so sánh"}
                </button>

            </article>
        `;
    }).join("");
}


/* ========================================
   5. HIỂN THỊ BẢNG SO SÁNH
   ======================================== */

function renderComparisonTable() {

    /*
     * Lấy các sản phẩm đã chọn theo thứ tự
     * được khai báo trong mảng products.
     */
    const selectedProducts = products.filter((product) =>
        selectedIds.has(product.id)
    );

    const hasSelection = selectedProducts.length > 0;

    // Hiển thị bảng hoặc thông báo trống.
    emptyState.hidden = hasSelection;
    tableScroll.hidden = !hasSelection;
    tableHint.hidden = !hasSelection;

    // Xóa nội dung cũ trước khi tạo bảng mới.
    comparisonHead.innerHTML = "";
    comparisonBody.innerHTML = "";

    // Nếu chưa chọn sản phẩm, kết thúc hàm.
    if (!hasSelection) {
        comparisonHelp.textContent =
            "Chọn ít nhất 2 sản phẩm để bắt đầu so sánh.";

        return;
    }

    // Cập nhật hướng dẫn theo số sản phẩm đã chọn.
    if (selectedProducts.length < 2) {
        comparisonHelp.textContent =
            "Chọn thêm ít nhất 1 sản phẩm để đối chiếu các thông số.";
    } else {
        comparisonHelp.textContent =
            `Đang hiển thị ${selectedProducts.length} sản phẩm đã chọn.`;
    }


    /* ----- Tạo tiêu đề bảng ----- */

    const headingRow = document.createElement("tr");

    const featureHeading = document.createElement("th");
    featureHeading.scope = "col";
    featureHeading.textContent = "Thông số";

    headingRow.appendChild(featureHeading);

    selectedProducts.forEach((product) => {
        const th = document.createElement("th");
        th.scope = "col";

        th.innerHTML = `
            <div class="compare-product-heading">

                <img
                    src="${product.image}"
                    alt=""
                    onerror="this.style.display='none'"
                >

                <div>
                    <strong>${product.name}</strong>

                    <button
                        class="remove-product"
                        type="button"
                        data-remove-id="${product.id}"
                        aria-label="Bỏ ${product.name} khỏi bảng so sánh"
                    >
                        Bỏ sản phẩm
                    </button>
                </div>

            </div>
        `;

        headingRow.appendChild(th);
    });

    comparisonHead.appendChild(headingRow);


    /* ----- Khai báo các tiêu chí so sánh ----- */

    const rows = [
        {
            label: "Giá bán",
            key: "price",
            value: (product) => formatPrice(product.price)
        },
        {
            label: "Màn hình",
            key: "display",
            value: (product) => product.display
        },
        {
            label: "Dung lượng bộ nhớ",
            key: "storage",
            value: (product) => product.storage
        },
        {
            label: "Camera",
            key: "camera",
            value: (product) => product.camera
        },
        {
            label: "Pin",
            key: "battery",
            value: (product) => product.battery
        }
    ];


    /* ----- Tạo các hàng thông số ----- */

    rows.forEach((row) => {
        const tr = document.createElement("tr");

        // Cột tên tiêu chí.
        const th = document.createElement("th");
        th.scope = "row";
        th.textContent = row.label;

        tr.appendChild(th);

        // Mỗi sản phẩm tương ứng với một cột.
        selectedProducts.forEach((product) => {
            const td = document.createElement("td");

            td.textContent = row.value(product);

            // Làm nổi bật hàng giá bán.
            if (row.key === "price") {
                td.classList.add("price-value");
            }

            tr.appendChild(td);
        });

        comparisonBody.appendChild(tr);
    });
}


/* ========================================
   6. CẬP NHẬT TOÀN BỘ GIAO DIỆN
   ======================================== */

function updateInterface() {

    // Cập nhật bộ đếm sản phẩm.
    selectionCount.textContent =
        `Đã chọn ${selectedIds.size}/${MAX_SELECTION}`;

    // Vô hiệu hóa nút xóa khi chưa có lựa chọn.
    clearButton.disabled = selectedIds.size === 0;

    clearButton.setAttribute(
        "aria-disabled",
        String(selectedIds.size === 0)
    );

    // Cập nhật danh sách và bảng so sánh.
    renderProductCards();
    renderComparisonTable();
}


/* ========================================
   7. XỬ LÝ CHỌN VÀ BỎ CHỌN SẢN PHẨM
   ======================================== */

productGrid.addEventListener("click", (event) => {

    const button = event.target.closest("[data-product-id]");

    // Bỏ qua nếu không nhấn vào nút chọn sản phẩm.
    if (!button) {
        return;
    }

    const productId = button.dataset.productId;

    if (selectedIds.has(productId)) {

        // Nếu đã chọn, nhấn lần nữa để bỏ chọn.
        selectedIds.delete(productId);

    } else if (selectedIds.size < MAX_SELECTION) {

        // Chỉ thêm nếu chưa vượt quá giới hạn.
        selectedIds.add(productId);
    }

    // Cập nhật giao diện ngay sau thao tác.
    updateInterface();
});


/* ========================================
   8. BỎ MỘT SẢN PHẨM TỪ BẢNG SO SÁNH
   ======================================== */

comparisonHead.addEventListener("click", (event) => {

    const button = event.target.closest("[data-remove-id]");

    if (!button) {
        return;
    }

    const productId = button.dataset.removeId;

    selectedIds.delete(productId);

    updateInterface();
});


/* ========================================
   9. BỎ CHỌN TẤT CẢ SẢN PHẨM
   ======================================== */

clearButton.addEventListener("click", () => {

    selectedIds.clear();

    updateInterface();
});


/* ========================================
   10. KHỞI TẠO GIAO DIỆN
   ======================================== */

// Hiển thị 4 sản phẩm và trạng thái ban đầu.
updateInterface();