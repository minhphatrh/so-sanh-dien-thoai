# AI Usage Log

## 1. Công cụ AI

- **Công cụ:** ChatGPT.
- **Mục đích:** Hỗ trợ khảo sát giao diện website thương mại điện tử, đề xuất hướng cải tiến và hỗ trợ xây dựng mã nguồn giao diện so sánh điện thoại.

## 2. Mục đích sử dụng

ChatGPT được sử dụng trong quá trình thực hiện bài tập với ba mục đích chính:

- Hỗ trợ phân tích các khu vực giao diện của website CellphoneS, bao gồm trang chủ, danh mục sản phẩm, trang chi tiết sản phẩm, chức năng tìm kiếm và giỏ hàng.
- Đề xuất ý tưởng cải tiến giao diện bằng cách xây dựng chức năng so sánh thông tin nhiều điện thoại trên cùng một trang.
- Hỗ trợ tạo mã HTML, CSS và JavaScript cho giao diện minh họa, sau đó kiểm tra và điều chỉnh để phù hợp với yêu cầu bài tập.

## 3. Prompt đã sử dụng

### Prompt 1: Phân tích website tham khảo

Yêu cầu ChatGPT phân tích năm khu vực giao diện của CellphoneS. Với mỗi khu vực, nội dung cần làm rõ mục đích, thành phần giao diện, mức độ thuận tiện cho khách hàng, vấn đề có thể gặp phải và hướng cải tiến đề xuất.

### Prompt 2: Đề xuất giải pháp cải tiến

Yêu cầu ChatGPT đề xuất giao diện so sánh điện thoại với bốn sản phẩm mẫu. Giao diện cần cho phép người dùng chọn sản phẩm và đối chiếu các thông tin như giá, màn hình, dung lượng lưu trữ, camera và pin. Thiết kế cần thích ứng với màn hình máy tính và thiết bị di động. Chỉ xây dựng giao diện phía người dùng, không yêu cầu backend. Các thông tin sản phẩm phải được xem là dữ liệu minh họa, không tự khẳng định là dữ liệu thực tế của CellphoneS.

### Prompt 3: Hỗ trợ viết mã nguồn

Yêu cầu ChatGPT hỗ trợ xây dựng giao diện bằng HTML, CSS và JavaScript, chia thành ba tệp `index.html`, `style.css` và `script.js`. Các chức năng chính gồm hiển thị danh sách điện thoại, chọn hoặc bỏ chọn sản phẩm, xóa lựa chọn và cập nhật bảng so sánh. Giao diện cần có bố cục rõ ràng và hỗ trợ màn hình nhỏ.

*Các nội dung trên là phần tóm tắt những yêu cầu đã sử dụng trong quá trình làm bài, không phải bản chép nguyên văn đầy đủ của từng prompt.*

## 4. Kết quả AI đề xuất

ChatGPT hỗ trợ đề xuất cấu trúc giao diện so sánh điện thoại và tạo mã nguồn ban đầu cho ba tệp:

- `index.html`: Xây dựng cấu trúc trang, danh sách điện thoại và bảng so sánh.
- `style.css`: Thiết lập màu sắc, kiểu chữ, khoảng cách, bố cục sản phẩm và giao diện responsive.
- `script.js`: Xử lý thao tác chọn hoặc bỏ chọn điện thoại, xóa lựa chọn và cập nhật thông tin trong bảng so sánh.

Bản minh họa sử dụng tên TechStore và bốn điện thoại mẫu. Tên thương hiệu này được dùng để phân biệt giao diện thực hành với website CellphoneS được khảo sát.

## 5. Kiểm tra và điều chỉnh

Sau khi nhận mã nguồn, em mở tệp `index.html` bằng Google Chrome để kiểm tra giao diện và các chức năng.

Các nội dung được kiểm tra gồm:

- Danh sách điện thoại hiển thị hình ảnh, tên sản phẩm và giá minh họa.
- Chức năng chọn sản phẩm và hiển thị thông tin trong bảng so sánh.
- Chức năng bỏ chọn hoặc xóa các sản phẩm đã chọn.
- Cách trình bày giao diện trên màn hình máy tính và thiết bị di động.

Trong quá trình kiểm tra, em chủ động điều chỉnh lớp CSS `.eyebrow`, bao gồm khoảng cách phía dưới, phông chữ, kích thước chữ, độ đậm, khoảng cách giữa các ký tự và khoảng cách giữa các dòng. Sau khi sửa, em lưu tệp `style.css` và tải lại trang để quan sát kết quả.

Các thông tin về giá và thông số điện thoại trong giao diện được dùng để minh họa chức năng, không được xem là dữ liệu sản phẩm hiện hành đã xác minh của CellphoneS.

## 6. Phần em hiểu và có thể giải thích

Qua quá trình thực hiện, em hiểu vai trò của từng tệp trong dự án:

- **HTML** tạo cấu trúc và các thành phần của giao diện.
- **CSS** điều chỉnh cách trình bày, màu sắc, kích thước chữ, khoảng cách và khả năng thích ứng với các kích thước màn hình.
- **JavaScript** xử lý tương tác khi người dùng chọn hoặc bỏ chọn sản phẩm và cập nhật bảng so sánh.

em cũng hiểu rằng việc nhận mã nguồn từ AI chưa đồng nghĩa với việc hoàn thành sản phẩm. Cần mở giao diện trên trình duyệt, kiểm tra các thao tác, phát hiện điểm chưa phù hợp và điều chỉnh mã nguồn khi cần thiết. Việc kiểm tra thực tế giúp em hiểu rõ hơn mối liên hệ giữa cấu trúc HTML, cách trình bày CSS và hành vi tương tác của JavaScript.
## 7. Prompt sử dụng trong Buổi 2

Trong Buổi 2, em tiếp tục sử dụng ChatGPT để rà soát và hoàn thiện mã nguồn đã xây dựng từ Buổi 1. Một số yêu cầu chính gồm:

- **Kiểm tra cấu trúc HTML5:** Yêu cầu AI xem xét cách tổ chức các phần tử HTML, cấu trúc nội dung và việc sử dụng các thẻ ngữ nghĩa.
- **Kiểm tra CSS Selector và Box Model:** Yêu cầu AI giải thích các bộ chọn CSS và hỗ trợ điều chỉnh margin, padding, border và các thuộc tính liên quan.
- **Áp dụng Flexbox và CSS Grid:** Yêu cầu AI phân tích cách bố trí tiêu đề và danh sách sản phẩm, đồng thời hướng dẫn sử dụng Flexbox và Grid phù hợp.
- **Kiểm tra Hover và Focus:** Yêu cầu AI xem xét các trạng thái tương tác của nút và đề xuất cách cải thiện giao diện.
- **Kiểm tra Responsive:** Yêu cầu AI tìm nguyên nhân danh sách sản phẩm vẫn hiển thị hai cột trên màn hình điện thoại và hướng dẫn điều chỉnh Media Query để hiển thị một cột.
- **Hoàn thiện README:** Yêu cầu AI hỗ trợ xây dựng nội dung giới thiệu dự án, kỹ thuật đã sử dụng, hướng dẫn chạy website và những thay đổi đã thực hiện.

## 8. Kiểm tra kết quả AI trong Buổi 2

Sau khi nhận được đề xuất, em đối chiếu với mã nguồn hiện tại và kiểm tra trực tiếp trên trình duyệt. Đối với phần Responsive, em phát hiện quy tắc trong Media Query dành cho điện thoại chưa được thiết lập phù hợp, khiến danh sách sản phẩm vẫn hiển thị hai cột. Em đã điều chỉnh lại thuộc tính `grid-template-columns` thành `1fr` trong Media Query tương ứng và kiểm tra lại giao diện ở kích thước màn hình nhỏ.

Các nội dung AI đề xuất chỉ được áp dụng sau khi em xem xét sự phù hợp với cấu trúc website và kết quả hiển thị thực tế.