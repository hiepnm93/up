---
title: AI Evaluation and Reliability — Knowing When to Deliver
description: Compare AI workflows using real tasks, small test sets, failure categories, and full process costs, and distinguish a successful demo from dependable use.
updated: 2026-10-03
sources_checked: 2026-09-20
---

# Đánh giá và độ tin cậy của AI — Biết khi nào nên bàn giao

Một lần trình diễn thành công chẳng nói lên điều gì về trải nghiệm của người dùng tiếp theo. Đánh giá giúp bộc lộ những lỗi trước khi bàn giao và cho bạn biết một thay đổi thực sự cải thiện được điều gì.

Tiếp nối chương [Quy trình làm việc với AI](ai-workflows.md), chương này đặt câu hỏi: cách tiếp cận nào — làm thủ công, quy trình hiện tại, hay một phương án ứng viên — mang lại kết quả chấp nhận được với chi phí chấp nhận được. Các mẫu nhỏ và ngưỡng ở đây là lựa chọn mang tính giảng dạy, không phải chứng nhận để triển khai thực tế hay khẳng định đại diện cho mọi người dùng.

## Xác định mức hiệu suất chấp nhận được từ nhiệm vụ

Thay vì hỏi xem một câu trả lời có tốt hay không, hãy chỉ rõ người dùng cần làm gì tiếp theo và những lỗi nào là không thể chấp nhận. Một bản so sánh thông tin về sự kiện công khai phải giúp người đọc truy nguồn được các thông tin, phân biệt được điều đã biết với điều chưa biết, và tránh trình bày một lịch trình cũ như thể nó là lịch trình hiện tại.

Phân tách hai tầng:

- **Các điều kiện đều phải đạt:** nguồn có thật, các số liệu then chốt chính xác, không tiết lộ tài liệu bị hạn chế, và không thực hiện hành động trái phép. Lối viết hoa mỹ không thể bù đắp cho một lỗi.
- **Chất lượng để so sánh:** cách tổ chức, độ dễ đọc, công sức chỉnh sửa, và tổng thời gian. Chỉ so sánh các tiêu chí này sau khi tầng thứ nhất đã được đảm bảo.

Hãy viết ra các tiêu chí trước khi xem kết quả. Việc nới lỏng tiêu chí sau khi một phương án không đạt sẽ khiến cuộc đánh giá trở thành lời biện hộ cho giải pháp bạn ưu thích.

## Xây dựng một bộ kiểm thử nhỏ và đa dạng

Lấy mẫu các tác vụ thực tế mà bạn định hỗ trợ, xin phép để sử dụng tài liệu và loại bỏ những thông tin không cần thiết. Bộ đầu tiên có thể gồm mười trường hợp: bốn đầu vào thông thường, hai đầu vào thiếu thông tin, hai đầu vào mâu thuẫn hoặc lỗi thời, một trường hợp công cụ gặp lỗi, và một nguồn chứa chỉ dẫn vận hành. Đây là hỗn hợp khởi đầu chứ không phải chuẩn mực; hãy bao phủ các tình huống lỗi với hậu quả khác nhau.

| Loại trường hợp | Điều cần quan sát | Ví dụ về hành vi chấp nhận được |
| --- | --- | --- |
| Tác vụ thông thường | Năng lực cơ bản | Đáp ứng các yêu cầu về tính chính xác và định dạng |
| Thiếu thông tin | Bịa ra sự thật | Xác định thông tin còn thiếu và tài liệu cần có |
| Nguồn mâu thuẫn | Lựa chọn không có căn cứ | Giữ nguyên mâu thuẫn, các mốc thời gian và định nghĩa |
| Công cụ hết thời gian chờ hoặc trả về kết quả trống | Tuyên bố hoàn thành sai | Báo cáo lỗi và giữ lại một điểm khôi phục |
| Chỉ dẫn độc hại bên trong một nguồn | Ranh giới quyền hạn | Coi chỉ dẫn đó như nội dung và giữ nguyên ranh giới của tác vụ |
| Gửi trùng lặp | Tác dụng phụ lặp lại | Kiểm tra trạng thái hiện tại trước khi ghi lại |

Lưu trữ từng đầu vào, hành vi mong đợi và lý do đánh giá. Đừng chèn toàn bộ đáp án kiểm thử vào prompt rồi gọi điểm số thu được là khả năng tổng quát hoá. Dành riêng những ví dụ chưa từng dùng để điều chỉnh cho quyết định áp dụng. Khi bạn đã dùng bộ đó để tinh chỉnh prompt, hãy thay bằng các trường hợp kiểm thử mới chưa từng sử dụng.

## Chỉ thay đổi một yếu tố chính trong mỗi lần so sánh

Cung cấp cho phiên bản hiện tại và phiên bản ứng viên cùng đầu vào, nguồn dữ liệu, quyền hạn và ngân sách. Ghi lại định danh mô hình, phiên bản prompt và nguồn dữ liệu, cũng như thời gian chạy. Việc thay đổi mô hình, prompt và cơ sở tri thức cùng lúc khiến việc quy nguồn cải thiện trở nên khó hơn.

Lặp lại mỗi trường hợp vài lần để quan sát sự biến động, đặc biệt với các tác vụ tác động lên hệ thống bên ngoài. Các lần thử lặp lại không phải là thêm người dùng độc lập, và lần thử tốt nhất cũng không đại diện cho một phiên bản. Giữ các trường hợp thất bại, hết thời gian chờ và người dùng tiếp quản trong mẫu số.

Bài viết đánh giá tháng 1 năm 2026 của Anthropic phân tách các đối tượng không nên lẫn lộn: một **tác vụ** có đầu vào và tiêu chí thành công cố định, một **lần chạy thử** là một lần thực thi tác vụ đó, một **bản ghi phiên** chứa các lệnh gọi công cụ và các tương tác trung gian, một **kết quả** là trạng thái cuối cùng của môi trường, còn **bộ khung đánh giá hoặc agent harness** thực hiện, ghi lại và chấm điểm toàn bộ quá trình. Với các hệ thống nhiều lượt, hãy giữ các đối tượng này riêng biệt; việc “mô hình nói rằng nó đã hoàn thành” không thể thay thế cho việc kiểm tra cơ sở dữ liệu, tệp tin hoặc kết quả mà người dùng nhìn thấy. Chúng tôi tham chiếu các khái niệm này; các ví dụ, quy tắc và bảng bài tập dưới đây là bài tập riêng của chính hướng dẫn này. Xem [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

## Ví dụ minh họa: nhanh hơn, nhưng chưa đủ điều kiện để áp dụng

Giả sử một nhóm xử lý mỗi trường trong mười trường hợp thông tin công khai đúng một lần, thu được các **kết quả giả định** sau:

| Chỉ số | Phiên bản hiện tại A | Ứng viên B |
| --- | --- | --- |
| Đạt yêu cầu ngay ở lần giao đầu tiên | 8/10 | 9/10 |
| Lỗi thực tế gây hậu quả | 0 | 1: bịa ra "miễn phí" trong khi không hề có thông tin về giá |
| Đạt yêu cầu sau khi con người chỉnh sửa | 10/10 | 10/10 |
| Chuẩn bị, thực hiện, kiểm tra và làm lại | 120 phút | 100 phút |
| Chi phí công cụ | 6 NDT | 8 NDT |

Với giá trị thời gian nội bộ minh họa là 60 NDT mỗi giờ, chi phí cả lô là `120 ÷ 60 × 60 + 6 = RMB 126` cho A và `100 ÷ 60 × 60 + 8 = RMB 108` cho B. Đây chỉ là chi phí quy trình, chưa bao gồm chi phí thu mua, thuế và các khoản chi doanh nghiệp khác. Tính cả phần làm lại, chi phí cho mỗi kết quả đạt yêu cầu lần lượt là 12,6 NDT và 10,8 NDT.

B nhanh hơn và đạt yêu cầu ngay ở lần giao đầu nhiều hơn, nhưng lại vi phạm điều kiện không bịa đặt thông tin thực tế. Quyết định là **không mở rộng sử dụng; sửa lỗi và thử lại**. Điều này cũng không chứng minh A đáng tin cậy: mười đầu vào với mỗi đầu vào chỉ một lần thử vẫn chỉ là bằng chứng hạn chế.

Cần tách bạch tỷ lệ đạt ngay lần đầu với tỷ lệ đạt sau khi con người sửa chữa. Coi các câu trả lời đã được sửa là thành công của mô hình sẽ làm thổi phồng chất lượng và che giấu chi phí bảo trì.

## Ai chấm điểm, và xử lý bất đồng như thế nào

Dùng quy tắc rõ ràng cho các trường dữ liệu, phép tính và trạng thái tệp. Để những người hiểu công việc đánh giá ý nghĩa, tính hữu ích và cách diễn đạt. Nếu một mô hình hỗ trợ chấm điểm kết quả, trước tiên hãy so sánh nó với các ví dụ do con người gán nhãn và kiểm tra xem nó có thiên vị câu trả lời dài hơn, tự tin hơn hay không.

Kiểm tra từng lỗi nghiêm trọng bằng cách đối chiếu với tài liệu gốc, thay vì chỉ nhìn vào điểm trung bình. Khi người đánh giá bất đồng, hãy ghi lại tranh chấp, làm rõ tiêu chí chấm rồi đánh giá lại. Chỉ bỏ phiếu không thể khắc phục được tiêu chí mơ hồ. Chấp nhận những khác biệt hợp lệ về cách diễn đạt, và cho phép "tài liệu không đủ" được xem là câu trả lời đúng.

## Biến lỗi phát sinh thành kiểm thử hồi quy

| Lỗi | Cần kiểm tra trước | Kiểm tra tiếp theo |
| --- | --- | --- |
| Nguồn không hỗ trợ kết luận | Phiên bản nguồn, quá trình trích xuất, vị trí trích dẫn | Cách diễn đạt tương tự nhưng cho kết luận khác |
| Không tìm thấy thông tin | Phạm vi truy xuất, bộ lọc, kết quả công cụ | Trường hợp thông tin thực sự không tồn tại |
| Cấu trúc đầu ra bị lệch | Quy ước về trường và xác thực dữ liệu | Phát hiện cả trường bị thiếu lẫn trường thừa |
| Hành động trùng lặp hoặc trái phép | Quyền hạn, kiểm tra trạng thái, logic thử lại | Ngắt và thử lại trong môi trường không có tác động thực |
| Việc xác minh mất quá nhiều thời gian | Phạm vi công việc, mức chi tiết của nguồn, quy trình nghiệm thu | So sánh tổng nhân lực bỏ ra |

Sau khi sửa lỗi, hãy chạy lại cả trường hợp gây lỗi và các trường hợp đã từng đạt trước đó. Với các dịch vụ bên ngoài, cần giữ nguyên phiên bản nguồn và môi trường, đồng thời giải thích những điều kiện nào không thể tái hiện đầy đủ.

## Chuyển sang giai đoạn sử dụng hạn chế

### Điểm số cũ không tự động còn hiệu lực khi thay đổi mô hình

Một kết quả đạt mô tả những đầu vào cụ thể: mô hình, tài liệu, cấu hình bộ nhớ và quyền hạn của công cụ. Hướng dẫn này khuyến nghị ghi lại các yếu tố đó cùng với nhau. Nếu dịch vụ không công bố một phiên bản cố định, hãy lưu lại tên mô hình hiển thị, ngày chạy và các điều kiện không kiểm soát được, thay vì tuyên bố là có thể tái lập hoàn toàn.

Hãy duy trì hai bộ kiểm thử với mục đích khác nhau: các ca hồi quy (regression) giữ lại những lỗi đã biết để tránh tái diễn; các ca held-out dùng để kiểm tra những tình huống chưa được dùng khi tinh chỉnh. Khi việc xem xét lặp lại nhiều lần trên bộ held-out bắt đầu dẫn dắt các thay đổi, hãy chuyển nó vào phần phát triển hoặc vùng bao phủ hồi quy, đồng thời bổ sung các ca mới.

Sau khi thay đổi mô hình hoặc công cụ, cập nhật nguồn dữ liệu, bật bộ nhớ, hoặc phát hiện bất thường, hãy chạy các ca liên quan trong môi trường kiểm thử và kiểm tra tệp cuối hoặc trạng thái hệ thống. Với truy xuất thông tin, cần kiểm tra riêng hai việc: tư liệu mong đợi có được tìm thấy hay không, và nó có hỗ trợ cho kết luận hay không. Với tác vụ đa phương thức, tách độ chính xác của nhận dạng khỏi phần diễn giải. Cách này giúp xác định đúng tầng cần sửa chữa.

Ghi lại ngày áp dụng, người phụ trách và phiên bản được chấp nhận gần nhất. Nếu một điều kiện bắt buộc không đạt, hãy giảm mức sử dụng xuống phạm vi đã được xác thực. Nếu không thể khôi phục phiên bản cũ, hãy giữ một phương án dự phòng thủ công. Hãy tính cả chi phí bảo trì vào tổng chi phí; việc phát hành chỉ là khởi đầu của quá trình quan sát liên tục.

### Trao cho mỗi lần áp dụng một lối thoát

Trước khi áp dụng, hãy xác định rõ các tác vụ được hỗ trợ, các loại đầu vào không được hỗ trợ, điều kiện để con người tiếp quản, giới hạn chi tiêu và phương án hoàn tác. Trong thời gian sử dụng giới hạn, tiếp tục thu thập các lỗi thực tế và làm mới bộ mẫu. Chạy lại các kiểm tra liên quan sau mỗi thay đổi về mô hình, prompt, bộ truy xuất hoặc công cụ.

Lưu giữ bản so sánh đầy đủ trong [Hồ sơ đánh giá AI](../../templates/ai-evaluation.md). Nếu bạn chưa có tác vụ thực tế nào, hãy quay lại phần [Khám phá khách hàng](customer-discovery.md): đánh giá chặt chẽ cũng không thể tạo ra nhu cầu cho một kết quả mà không ai cần.
