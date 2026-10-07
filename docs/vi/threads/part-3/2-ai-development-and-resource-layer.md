---
title: AI Learning, Project Development, and Resource-layer Entrepreneurship
description: Han Xiankai's path from learning with AI to building and operating an AI resource layer, with engineering, delivery, operations, and business results kept distinct.
updated: 2026-09-20
sources_checked: 2026-09-20
---

# Học AI, phát triển dự án và khởi nghiệp ở tầng tài nguyên

Tôi tên là Han Xiankai, trên mạng còn được biết đến với biệt danh Li Pu. Nhiều độc giả biết đến tôi lần đầu qua dự án học tiếng Anh này, và sau đó qua những bài viết của tôi về khởi nghiệp phần mềm, thất bại, phục hồi và bắt đầu lại từ đầu. Nay tôi xin công bố vai trò của mình là chủ tịch Công ty TNHH Điện toán đám mây China Token (China Token Cloud Computing Co., Ltd.) và đặt giai đoạn công việc tiếp theo vào một câu hỏi cụ thể hơn: **khi AI trở thành một năng lực phổ biến, một người bình thường có thể đi từ người học đến người xây dựng, rồi từ người xây dựng đến nhà khởi nghiệp ở tầng tài nguyên bằng cách nào?**

Đây không phải là câu chuyện về việc làm giàu dễ dàng nhờ AI, và nó cũng không chứa bất kỳ lời hứa nào về lợi nhuận. Đây là một bản đồ công việc đang được thử nghiệm trong thực tế: những gì đã xảy ra, những phương pháp nào có thể chuyển giao được, và những kết quả kinh doanh nào vẫn phải được trả lời bằng người dùng thật, chi phí thật, sự cố thật và thời gian. Khi công ty thất bại vào năm 2022, tôi đã thấy những tính năng trông giống AI có thể che giấu dữ liệu thiếu hụt, kiến trúc yếu kém và trách nhiệm không rõ ràng. Những "cổng kiểm định" ngày nay chính là kết quả lớn lên từ thất bại đó.

Hãy áp dụng các nguyên tắc kỹ thuật và kinh doanh tại đây thông qua một thử nghiệm nhỏ về [Khám phá khách hàng](../practice/customer-discovery.md), [Kinh doanh bền vững](../practice/sustainable-business.md), [Quy trình làm việc với AI](../practice/ai-workflows.md) hoặc [Đánh giá độ tin cậy](../practice/ai-evaluation.md).

## Tách biệt Sự thật, Thực hành và Kết quả

- **Sự thật đã rõ**: Tôi đảm nhiệm chức chủ tịch Công ty Cổ phần Điện toán đám mây Token Trung Quốc (China Token Cloud Computing Co., Ltd.). Trang chủ hiện tại mô tả `token.love` là một cổng AI hợp nhất cho các tình huống doanh nghiệp và liên quan đến chính phủ, với các tính năng như truy cập mô hình, định tuyến và chuyển đổi dự phòng, đo lường mức sử dụng, nhật ký kiểm tra, và triển khai riêng tư/ngoại tuyến.
- **Trong thực tế**: Tôi dùng AI để học tập, bóc tách yêu cầu, phát triển dự án, viết kiểm thử, tổ chức tài liệu và bàn giao công việc, đồng thời thử nghiệm những phương pháp này trong môi trường nhóm và doanh nghiệp.
- **Vẫn chưa kiểm chứng**: liệu khách hàng có tiếp tục trả tiền hay không, liệu kinh tế đơn vị (unit economics) có trụ vững không, liệu việc thay đổi nhà cung cấp có thể quản lý được không, và liệu doanh thu có đủ che phủ rủi ro hay không.

Khi sự thật, phán đoán và khát vọng trộn lẫn vào nhau, một bài viết về khởi nghiệp sẽ biến thành quảng cáo. Tách bạch chúng thì bài nhìn lại một cách chân thực mới khả thi. Khi phân tích một trải nghiệm công khai, hãy dùng [Mẫu Phân tích Trường hợp AI](../../templates/ai-case-review.md) để ghi lại nguồn và các sự thật trước khi viết phần phán đoán hay rút ra bài học.

## Thất bại năm 2022 đã thay đổi các chốt kiểm soát ngày nay như thế nào

Vấn đề không nằm ở việc thiếu mã nguồn. Chúng tôi đã thất bại trong việc chứng minh trước các thứ khác: năng lực cốt lõi, bộ dữ liệu, hiệu năng, bảo mật và giá trị dành cho người dùng. Phần giao diện, hỗ trợ đa nền tảng và các kết quả cài sẵn khiến sản phẩm trông có vẻ hoàn chỉnh, nhưng không thể trả lời được dữ liệu lấy từ đâu, kết quả được xác minh ra sao, hay ai chịu trách nhiệm khi xảy ra lỗi.

Giờ đây, mọi dự án AI đều bắt đầu bằng năm câu hỏi:

1. **Năng lực có thực không?** Đó là mô hình, truy xuất dữ liệu, một quy tắc, hay một quy trình do con người thực hiện? Đừng thay lời giải thích bằng một nhãn tiếp thị.
2. **Dữ liệu có được phép dùng không?** Nguồn gốc, quyền sử dụng, mức độ nhạy cảm, thời gian lưu giữ và cách xóa dữ liệu đã rõ ràng chưa?
3. **Kết quả được nghiệm thu thế nào?** Bộ mẫu kiểm thử, các trường hợp biên, việc rà soát bởi con người và tiêu chuẩn của người dùng thực tế là gì?
4. **Chi phí có gánh nổi không?** Chi phí mô hình, mạng, kỹ thuật, hỗ trợ, làm lại, tuân thủ và xử lý sự cố đã được ghi vào sổ sách chưa?
5. **Làm thế nào để rút lui an toàn?** Ai có thể tạm dừng, hạ mức hoạt động, chuyển đổi, thông báo, quay ngược lại và rà soát?

Nếu những câu hỏi này chưa có lời đáp, bước tiếp theo không phải là thêm tính năng. Hãy thu hẹp vấn đề và chạy một thí nghiệm đủ khả năng bác bỏ giả định hiện có.

## 1. Từ người học đến người kiến tạo

Tôi từng coi việc học tiếng Anh chỉ là tích lũy thêm kiến thức. Dần dần tôi nhận ra đích đến không phải là một kho câu trả lời lớn hơn, mà là khả năng tự mình hoàn thành một công việc. Học cùng AI cũng vậy. Kết quả không nằm ở độ dài câu trả lời của mô hình, mà ở việc tôi có thể khép lại cuộc trò chuyện, giải thích được những quyết định quan trọng, chạy được chương trình, đối mặt với lỗi, và bàn giao sản phẩm hay không.

Giờ đây tôi dùng một vòng lặp làm việc:

1. **Nêu một vấn đề có thật**: xác định ai là người gặp vấn đề và như thế nào được tính là hoàn thành;
2. **Lưu lại điểm xuất phát khi tự làm một mình**: bộc lộ những lỗ hổng kiến thức, giới hạn và điểm mù;
3. **Chuẩn bị bối cảnh đáng tin cậy**: cung cấp tài liệu, dữ liệu, mã nguồn hiện có, quy định của tổ chức và giới hạn rủi ro;
4. **Dùng AI để phân rã vấn đề**: so sánh các phương án, tạo những thí nghiệm nhỏ và giải thích các giả định mà không phó thác phán đoán cho AI;
5. **Chủ động xây dựng và kiểm chứng**: dùng AI cho bản thử nghiệm, viết mã, tái cấu trúc, kiểm thử, tài liệu và gỡ lỗi;
6. **Thu thập nhiều nguồn phản hồi**: kiểm thử, người dùng, chuyên gia trong lĩnh vực, các nguồn tài liệu và rà soát bảo mật cùng quyết định;
7. **Lưu lại trạng thái và bằng chứng**: ghi nhận mức độ hoàn thành, lỗi, chi phí, các quyết định và hành động nhỏ nhất tiếp theo.

Cách làm này mở rộng từ [Học bất cứ điều gì với AI](1-ai-learning.md), nhưng phát triển dự án bổ sung thêm một quy tắc cứng: **mọi quyết định quan trọng đều phải kiểm chứng được, giải thích được, hoặc hoàn tác được**.

## 2. Xây dựng dự án với AI: Chất lượng sau tốc độ

AI có thể tạo ra code trông có vẻ hoàn chỉnh chỉ trong vài phút, và cũng chỉ trong vài phút có thể lan truyền một giả định sai ra toàn bộ hệ thống. Cách tiếp cận của tôi không phải là thay thế lập trình viên, mà là coi AI như một cộng sự làm việc tần suất cao — có thể bị chất vấn và bắt buộc phải vượt qua bước nghiệm thu.

### 2.1 Tóm tắt dự án

Tạo một trang `task-brief.md` cho mỗi dự án:

```markdown
# Task Brief

Real situation:
User/audience:
Decision or action to complete:
Deadline:

Known facts and sources:
Files allowed:
Data sensitivity: public / internal / confidential / restricted
Material deliberately withheld:

Final deliverable:
Format and length:
Acceptance criteria:
Items a person must confirm:

AI may:
AI may not:
Human reviewers:
Rollback or stop condition:
```

“Trải nghiệm tốt”, “kiến trúc nâng cao” và “trí tuệ thông minh” không phải là tiêu chí nghiệm thu. Hãy dùng các hành động quan sát được, ví dụ như “người dùng có thể nhập một tệp và xem báo cáo lỗi trong vòng mười phút”.

### 2.2 Chuỗi bàn giao có thể kiểm tra

| Giai đoạn | AI có thể hỗ trợ | Người phải xác nhận |
| --- | --- | --- |
| Yêu cầu | Cấu trúc hóa người dùng, kịch bản, ràng buộc và các câu hỏi | Vấn đề có thực sự tồn tại hay không và kết quả có thể quan sát được hay không |
| Thiết kế | Đề xuất kiến trúc, giao diện và thí nghiệm tối thiểu | Ranh giới dữ liệu, các phụ thuộc, chế độ lỗi và chi phí dài hạn |
| Nguyên mẫu | Tạo trang, giao diện, kịch bản (script) và dữ liệu mẫu | Có giải quyết được nhiệm vụ cốt lõi hay không, thay vì chỉ trông đẹp mắt |
| Triển khai | Hoàn thiện mã, giải thích thay đổi và tạo kiểm thử | Logic trọng yếu, phân quyền, xử lý lỗi và khả năng bảo trì |
| Kiểm định | Chạy kiểm thử, phân tích tĩnh, kiểm tra hiệu năng và bảo mật | Kiểm thử có bao phủ rủi ro thực sự hay không và kết quả có tái lập được hay không |
| Bàn giao | Chuẩn bị tài liệu, triển khai, ghi nhận thay đổi và hoàn tác (rollback) | Người dùng có thể vận hành, nhóm khác có thể tiếp quản, và sự cố có thể truy vết hay không |

Chỉ tiến thêm một phân đoạn hợp lý mỗi lần. Không trộn lẫn yêu cầu, tái cấu trúc, định dạng mã và nâng cấp phụ thuộc trong cùng lúc. Hãy giữ lại một đường cơ sở làm việc độc lập, một sản phẩm chạy được, và một sổ ghi lỗi/chỉnh sửa, để có thể phân biệt giữa tốc độ và năng lực thực sự.

### 2.3 Điểm kiểm tra mã nguồn và phát hành

```text
Here is the task brief and current code structure. Do not write code yet.
Propose two minimal implementation options and compare requirement coverage, change scope, dependencies, failure modes, test difficulty, data/permission risk, and migration cost.
Mark missing information and inference. Recommend only one slice that can be verified in one to two hours.
```

Trước khi phát hành, hãy lưu lại phiên bản, tóm tắt thay đổi, các bước chuyển đổi dữ liệu, các chỉ số cần theo dõi, điều kiện kích hoạt hoàn tác, người phụ trách và thông báo gửi người dùng. Rà soát theo mức độ nghiêm trọng cho từng rủi ro: lệch khỏi yêu cầu, mất dữ liệu, vượt quyền, chèn mã độc, xung đột khi chạy đồng thời, xử lý lỗi, hiệu năng, khả năng bảo trì và các chỗ còn thiếu kiểm thử.

Sau mỗi lần chạy thử nghiệm hoặc phát hành, hãy hoàn thành [Bảng chấm điểm Dự án AI](../../templates/ai-project-scorecard.md) và lưu giữ ba kết quả: điểm chuẩn khi làm không có trợ giúp, kết quả khi làm có trợ giúp, và bài kiểm tra lại độc lập sau một khoảng thời gian. Thiếu một trong ba, bạn sẽ không thể biết công cụ này thực sự tạo ra năng lực mới, hay chỉ là "thuê ngoài" việc cho máy, hay lại gây thêm phần việc phải làm lại.

## 3. Tầng tài nguyên AI là gì?

Mô hình cung cấp năng lực, còn ứng dụng cung cấp kết quả mà người dùng nhìn thấy. Nằm giữa chúng là hạ tầng giúp các năng lực trở nên dễ tiếp cận, có thể kiểm soát, đo lường được và bền vững. Tôi gọi đây là **tầng tài nguyên AI**.

Tầng này không chỉ đơn thuần là bán lại điểm cuối (endpoint) của mô hình. Nó tổ chức các mô hình, tài khoản, tài nguyên tính toán, ranh giới dữ liệu và quy trình vận hành thành một dịch vụ mà cả nhóm có thể hiểu, sử dụng và quản trị.

Khi việc sử dụng công cụ và điều phối tác nhân (agent) trở nên phổ biến, tầng tài nguyên cũng phải xử lý khả năng tương thích và ranh giới ủy quyền. [Đặc tả MCP](https://modelcontextprotocol.io/specification/2025-06-18) định nghĩa tài nguyên, prompt và công cụ như những năng lực kết nối có thể kết hợp với nhau, nhưng nó không thực hiện việc rà soát an ninh cho hệ thống. Trước khi kết nối một máy chủ bên ngoài, hãy liệt kê phạm vi dữ liệu, quyền ghi, sự đồng ý của người dùng, bản ghi các lần gọi và đường dẫn thu hồi quyền. Giao thức giúp giảm bớt công việc tích hợp lặp lại, chứ không giảm chi phí của trách nhiệm. Trong thực tế, hãy dùng cổng ủy quyền của [AI Workflows](../practice/ai-workflows.md) và bản ghi quy trình/kết quả của [AI Evaluation](../practice/ai-evaluation.md) cho một đợt thí điểm nhỏ.

### 3.1 Bản đồ năng lực

| Năng lực tầng tài nguyên | Vấn đề của khách hàng | Bằng chứng tối thiểu để kiểm chứng |
| --- | --- | --- |
| Truy cập và định tuyến đa mô hình | Doanh nghiệp bị trói buộc vào một nhà cung cấp | Quy tắc định tuyến và hồ sơ so sánh cùng một tác vụ trên hai mô hình |
| Danh tính, phân quyền và hạn mức | Việc sử dụng và trách nhiệm giải trình không rõ ràng | Ma trận vai trò, chính sách hạn mức và mẫu nhật ký kiểm toán |
| Đo lường, chi phí và tính phí | Các nhóm dùng AI mà không thấy được chi phí | Báo cáo chi phí theo nhóm/dự án/yêu cầu và quy trình đối chiếu |
| Triển khai và vận hành | Dịch vụ không thể đưa vào các môi trường đã được phê duyệt | Danh mục kiểm tra triển khai, khác biệt giữa các môi trường và diễn tập hoàn tác |
| Khả năng quan sát và sự cố | Không giải thích được độ trễ, lỗi và sự thay đổi chất lượng | Nhật ký yêu cầu, phân loại lỗi, cảnh báo và hồ sơ xử lý |
| Ranh giới dữ liệu và tuân thủ | Luồng dữ liệu nhạy cảm và thời gian lưu giữ không rõ ràng | Sơ đồ luồng dữ liệu, quy tắc lưu giữ, phê duyệt và bằng chứng xóa dữ liệu |
| Tích hợp và hỗ trợ | Năng lực không bao giờ đi vào quy trình nghiệp vụ | Nghiệm thu tích hợp, lộ trình trực xử lý sự cố, phiếu hỗ trợ và bàn giao |

Đối với khách hàng, giá trị không nằm ở việc có thêm một cái tên mô hình nữa. Giá trị đó là ít phải tích hợp trùng lặp hơn, ít chi phí mất kiểm soát hơn, ít bị gián đoạn hơn khi thay đổi nhà cung cấp, và một ranh giới trách nhiệm mà tổ chức có thể hiểu và quản trị được.

### 3.2 Vòng đời của một yêu cầu

Kiến trúc tham chiếu này không phải là một lời hứa về sản phẩm. Mọi dịch vụ ở tầng tài nguyên đều phải giải thích được cách một yêu cầu di chuyển:

**danh tính → phân quyền và hạn mức → kiểm tra dữ liệu → quyết định định tuyến → gọi mô hình → lọc đầu ra → ghi nhận đo lường → giám sát/cảnh báo → trả kết quả cho người dùng**

Mỗi bước phải trả lời được: ai sở hữu bước đó, ghi nhận những gì, điều gì xảy ra khi gặp lỗi, dữ liệu được lưu giữ trong bao lâu, và yêu cầu có thể được phát lại hay xóa bỏ hay không. Dịch vụ chỉ chuyển tiếp giao diện mà thiếu đo lường, phân quyền, nhật ký, giảm tải và kiểm toán thì không phải là dịch vụ doanh nghiệp đáng tin cậy.

### 3.3 Định tuyến không phải là "chọn mô hình mạnh nhất"

Việc định tuyến cần bám theo nhiệm vụ và các ràng buộc của nó:

- với nhiệm vụ rủi ro thấp, khối lượng lớn, ổn định, hãy ưu tiên chi phí và độ trễ trước;
- với suy luận phức tạp hoặc ngữ cảnh dài, hãy so sánh chất lượng, giới hạn và tỷ lệ lỗi;
- với dữ liệu nhạy cảm, hãy kiểm tra phạm vi được phê duyệt, vị trí triển khai và chính sách ghi log;
- khi nhà cung cấp gặp sự cố, hãy dùng phương án suy giảm chức năng, thử lại, chuyển đổi hoặc chuyển cho con người xử lý;
- ghi lại phiên bản, lý do, mẫu kiểm thử và phương án quay lui cho mọi thay đổi định tuyến.

Mô hình mạnh nhất không phải lúc nào cũng là mô hình phù hợp nếu nó không ổn định, khó kiểm toán hoặc vượt quá khả năng chi trả.

## 4. China Token Cloud và token.love: Một lộ trình kinh doanh trong thực tiễn

China Token Cloud Computing Co., Ltd. là công ty mà tôi hiện đang giữ chức vụ chủ tịch. Trang chủ hiện tại mô tả `token.love` là một cổng AI hợp nhất dành cho các tình huống doanh nghiệp và liên quan đến chính phủ, liệt kê các tính năng như truy cập mô hình, định tuyến và chuyển đổi dự phòng, đo lường mức sử dụng, nhật ký kiểm toán, và triển khai riêng/ngoại tuyến. Đây là tuyên bố định vị sản phẩm trên trang chủ, không phải sự bảo chứng từ bất kỳ bên thứ ba nào, và nó không thay thế cho tài liệu chính thức, phê duyệt tuân thủ, hợp đồng, hay việc tự đánh giá an ninh của khách hàng.

Xét từ góc độ lớp tài nguyên, lộ trình có thể được diễn đạt như sau:

**tài nguyên mô hình và tính toán → truy cập và định tuyến hợp nhất → phân quyền, đo lường và quản trị → tích hợp vào doanh nghiệp → vận hành và hỗ trợ liên tục**

Một sản phẩm thực sự giúp khách hàng hiểu rõ năng lực đến từ đâu, chi phí hình thành như thế nào, dữ liệu đi qua đâu, ai là người xử lý sự cố, và khả năng chuyển đổi sang hệ thống khác còn được đảm bảo hay không. Các năng lực cụ thể, khu vực, gói dịch vụ, phạm vi tuân thủ và cam kết dịch vụ phải được đối chiếu với tài liệu hiện hành của [token.love](https://token.love/) và thỏa thuận bằng văn bản.

## 5. Thí điểm tại doanh nghiệp: Giải quyết trước một vấn đề chấp nhận được

### 5.1 Khám phá

Không bắt đầu bằng một buổi demo của mô hình. Hãy hỏi:

- quy trình hiện tại là gì và bước nào chậm nhất hoặc dễ mắc lỗi nhất;
- ai là người gánh chi phí, tần suất xảy ra là bao nhiêu, và một sai sót sẽ ảnh hưởng đến điều gì;
- dữ liệu nào có thể được sử dụng và dữ liệu nào không bao giờ được đưa ra khỏi tổ chức;
- những tài khoản, hợp đồng, mạng, quyền hạn và yêu cầu bảo mật nào đã có sẵn;
- ai sẽ tiếp tục sử dụng, phê duyệt và trả tiền nếu thí điểm thành công;
- kết quả như thế nào là "tiếp tục" và kết quả như thế nào là "dừng lại".

Hãy lập một bản tóm tắt vấn đề trên một trang, chứ không phải một tuyên bố về giá trị của AI trên một trang.

### 5.2 Thí điểm

Một cuộc thí điểm đáng tin cậy cần có phạm vi, mẫu lựa chọn, những mục không nằm trong phạm vi, ranh giới dữ liệu, người phụ trách, mốc thời gian, tiêu chí nghiệm thu, phương án dừng khi thất bại, và trần chi phí. Hãy giữ nguyên số liệu cơ sở của quy trình cũ: thời gian lao động của con người, tỷ lệ lỗi, thời gian chờ, khối lượng công việc phải làm lại, chi phí hiện tại và mức độ hài lòng của người dùng.

Trong quá trình thí điểm, cần ghi lại các lượt gọi mô hình, định tuyến, độ trễ, lỗi phát sinh, các lần con người tiếp quản, số giờ hỗ trợ, ngoại lệ dữ liệu, việc phải làm lại và phản hồi của người dùng. Chỉ ghi lại nội dung do mô hình tạo ra thì không thể chứng minh có sự cải thiện về kinh doanh.

Hãy dùng [Bảng chấm điểm dự án AI](../../templates/ai-project-scorecard.md) để ghi lại điều kiện kiểm thử, chi phí, hiệu năng đo độc lập và các điều kiện phát hành theo từng phiên bản, để cuộc thí điểm không kết thúc chỉ ở dạng một buổi demo đơn lẻ.

### 5.3 Nghiệm thu và bàn giao

Chia nghiệm thu thành bốn lớp:

1. **Chức năng**: luồng có chạy trọn vẹn không và lỗi có được hiển thị rõ ràng không?
2. **Chất lượng**: kết quả đầu ra có đạt chuẩn kinh doanh không và con người có thể tiếp quản được không?
3. **Bảo mật**: phân quyền, nhật ký, thời gian lưu trữ, xóa dữ liệu và kiểm toán có đạt yêu cầu không?
4. **Vận hành**: ai phụ trách nâng cấp, sự cố, chi phí, chuyển đổi nhà cung cấp và hỗ trợ?

Gói bàn giao nên bao gồm kiến trúc, luồng dữ liệu, phân quyền, biến môi trường, triển khai, giám sát, đường dẫn trực ca, quy trình quay lại (rollback), các lỗi đã biết và ngày rà soát tiếp theo.

## 6. Doanh nghiệp Có Thể Kiếm Tiền Bằng Cách Nào

Doanh thu không đến từ việc đổi tên một mô hình rồi cộng thêm biên lợi nhuận. Nó đến từ việc gánh lấy những công việc đắt đỏ, phân mảnh, hoặc khó khăn đối với khách hàng trong việc tự quản lý. Các hình thức trao đổi giá trị có thể bao gồm:

- **dịch vụ quản lý tài nguyên**: quản lý quyền truy cập mô hình, hạn mức (quota) và chi phí theo yêu cầu, theo nhóm, theo dự án hoặc theo mức dịch vụ;
- **tích hợp và bàn giao**: kết nối với các hệ thống hiện có và hoàn thiện việc triển khai, phân quyền, nhật ký và nghiệm thu;
- **vận hành trọn gói**: xử lý nâng cấp, sự cố, biến động chất lượng, thay đổi nhà cung cấp và hỗ trợ hàng ngày;
- **quản trị và bảo mật**: thiết lập ranh giới dữ liệu, phê duyệt, kiểm toán, truy vết và ứng phó rủi ro;
- **dự án theo yêu cầu và đào tạo**: đưa một bài toán kinh doanh thực tế đi qua các bước thiết kế, làm mẫu thử, ra mắt và bàn giao.

Đây không phải là những lời hứa về doanh thu. Đây là các điểm tính phí có thể được thử nghiệm từng cái một. Mỗi điểm phải trả lời được vì sao khách hàng sẽ trả tiền, kết quả sẽ được nghiệm thu ra sao, và chi phí dịch vụ có được bù đắp theo thời gian hay không.

### 6.1 Các giao thức tính phí và trường hợp sử dụng

| Giao thức tính phí | Vấn đề phù hợp | Rủi ro chính | Bằng chứng cần ghi lại |
| --- | --- | --- | --- |
| Phí khám phá/thiết kế một lần | Làm rõ quy trình, ranh giới và khâu thử nghiệm | Không còn giá trị sau khi kế hoạch được bàn giao | Sản phẩm bàn giao, số giờ làm việc và tín hiệu tiếp tục |
| Phí triển khai | Tích hợp, triển khai, phân quyền, nghiệm thu | Mỗi khách hàng trở thành một bản dựng riêng mới | Phạm vi, thay đổi, làm lại và không gian đóng góp |
| Phí theo mức sử dụng/quản lý tài nguyên | Cuộc gọi, dự án hoặc quản trị nhóm liên tục | Giá từ nhà cung cấp và khối lượng biến động | Cuộc gọi, định tuyến, chi phí, đối soát và giới hạn |
| Gói thuê bao/cấp dịch vụ | Vận hành, hỗ trợ và quản trị liên tục | Lời hứa vượt quá năng lực của nhóm | Thời gian phản hồi, mục tiêu khả dụng, giờ hỗ trợ, ngoại lệ |
| Phí đào tạo/tư vấn | Xây dựng năng lực và quản trị cho nhóm | Việc học không trở thành sử dụng thực tế | Mục tiêu, công việc, chuyển giao và kiểm tra lại |

Các thỏa thuận chính thức điều hành dịch vụ thực tế. Chương công khai này chỉ bàn về logic kinh doanh, không bịa ra mức giá, lợi nhuận, số lượng khách hàng hay kết quả thu về.

### 6.2 Sổ cái chi phí

Các doanh nghiệp ở tầng tài nguyên có thể nhìn thấy nhu cầu nhưng lại không nhìn thấy chi phí. Hãy ghi nhận chi phí mô hình và tính toán, mạng và lưu trữ, kỹ thuật, hỗ trợ khách hàng, thu hút khách hàng mới, tuân thủ, bảo mật, bồi thường sự cố, thay đổi giá từ nhà cung cấp, chuyển đổi hệ thống, thuế, và thời gian của ban quản lý.

```text
contribution space = customer revenue
                    - models and infrastructure
                    - engineering and support
                    - acquisition and compliance
                    - incidents, rework, and refunds
```

Hãy tách chi phí một lần khỏi chi phí liên tục. Dự án một lần được đánh giá bằng hiệu quả bàn giao; dịch vụ liên tục được đánh giá bằng khả năng giữ chân khách hàng, mức độ hỗ trợ, chi phí trên một đơn vị, và các tín hiệu về việc có tiếp tục hay không. Nếu mỗi khách hàng mới đều kéo theo thêm cuộc gọi, nhân lực và rủi ro mà không tạo ra đủ giá trị tương ứng, thì quy mô càng lớn càng khiến lỗ nặng thêm.

## 7. Vận hành: Không có runbook, không có dịch vụ doanh nghiệp

### 7.1 Bảng điều khiển vận hành tối thiểu

- khối lượng yêu cầu, tỷ lệ thành công, các nhóm lỗi và số lần thử lại;
- phân phối độ trễ thay vì chỉ giá trị trung bình;
- chi phí theo mô hình, đội nhóm, dự án và tác vụ;
- các trường hợp vượt hạn ngạch, lỗi dữ liệu, từ chối phân quyền và các lần con người tiếp quản;
- trạng thái nhà cung cấp, thay đổi định tuyến và thay đổi phiên bản;
- phản hồi của người dùng, thời gian hỗ trợ và các vấn đề lặp lại.

Đây là các tín hiệu vận hành được khuyến nghị, không phải là khẳng định rằng `token.love` hiện đã cung cấp đủ tất cả chúng. Trước khi ra mắt, hãy ghi rõ các chỉ số, người phụ trách, ngưỡng cảnh báo và thời gian lưu giữ dữ liệu vào thỏa thuận dự án hoặc sổ tay vận hành nội bộ.

### 7.2 Xử lý sự cố

```text
discover → assess impact → pause risky changes → degrade/switch/take over
         → notify affected people → preserve logs and timeline → repair and verify
         → review root cause, cost, prevention → update the runbook
```

Ghi lại thời điểm phát hiện, các dự án bị ảnh hưởng, những thay đổi gần đây, rủi ro dữ liệu, biện pháp tạm thời, trạng thái của nhà cung cấp, thời gian khôi phục, việc thông báo cho khách hàng, giả thuyết về nguyên nhân gốc rễ, và bằng chứng khắc phục triệt để. AI có thể giúp dựng dòng thời gian; nó không thể thay thế người phụ trách sự cố.

### 7.3 Bài tập chuyển đổi nhà cung cấp

Với mỗi nhà cung cấp quan trọng, hãy chuẩn bị sẵn một tuyến đường dự phòng, mô hình suy giảm hiệu năng, giới hạn tốc độ, bộ nhớ đệm hoặc quy trình thủ công, kế hoạch di chuyển dữ liệu, đầu mối liên hệ hợp đồng, và bài kiểm tra khôi phục. Tổ chức một đợt diễn tập ít rủi ro ít nhất mỗi quý để xác nhận rằng "có thể chuyển đổi" không chỉ là một câu viết trong tài liệu.

## 8. Ranh giới về Dữ liệu, Bảo mật và Tuân thủ

| Mức dữ liệu | Ví dụ | Cách xử lý mặc định |
| --- | --- | --- |
| Công khai | Tài liệu đã công bố, mã nguồn công khai, dữ liệu công khai | Có thể sử dụng sau khi kiểm tra nguồn và giấy phép |
| Nội bộ | Kế hoạch chưa công bố, quy trình, log không chứa thông tin nhạy cảm | Chỉ dùng công cụ được phê duyệt; giới hạn số thành viên và thời gian lưu giữ |
| Bảo mật | Hồ sơ khách hàng, hợp đồng, chiến lược, lỗ hổng chưa công bố | Không tải lên nếu chưa có phê duyệt rõ ràng; ưu tiên xử lý cục bộ hoặc ẩn danh hóa dữ liệu |
| Hạn chế truy cập | Khóa mật khẩu, dữ liệu định danh/y tế, dữ liệu trẻ em, quyền riêng tư của bên thứ ba | Không đưa vào mô hình chung; tuân theo chính sách và luật hiện hành |

Một dịch vụ ở lớp tài nguyên phải trả lời được: dữ liệu đi vào từ đâu, những nhà cung cấp nào nhìn thấy nó, những log nào được lưu giữ, ai có thể đọc chúng, dữ liệu bị xóa khi nào, và việc xóa được chứng minh bằng cách nào. Việc xóa một tệp không đồng nghĩa với việc loại bỏ mọi lịch sử, bộ nhớ đệm, bản xuất hay bản sao lưu.

## 9. Lộ trình xác thực mười hai tuần

| Thời gian | Câu hỏi trung tâm | Hành động | Bằng chứng cần lưu giữ |
| --- | --- | --- | --- |
| Tuần 1–2 | Tổ chức nào đang có vấn đề cấp bách, cụ thể? | Phỏng vấn, quan sát quy trình cũ, lập bản đồ dữ liệu | Ghi chú phỏng vấn, số liệu ban đầu, ranh giới, điều kiện dừng |
| Tuần 3–5 | Sản phẩm tối thiểu có thể giảm chi phí tích hợp hay quản lý không? | Xây dựng môi trường thử nghiệm, kết nối một nhiệm vụ, chạy các bài kiểm tra so sánh | Nguyên mẫu hoạt động được, các bài kiểm tra, thất bại, chi phí |
| Tuần 6–8 | Khách hàng có tiếp tục dùng một quy trình thực tế không? | Thử nghiệm quy mô nhỏ, người đảm nhiệm khi cần, đánh giá hàng tuần | Dấu vết sử dụng, sự cố, giờ hỗ trợ, hồ sơ bảo mật |
| Tuần 9–10 | Người khác có thể tái hiện được việc bàn giao vận hành không? | Bàn giao, triển khai, diễn tập khôi phục về phiên bản cũ | Sổ tay vận hành, bảng phân quyền, xác nhận bàn giao |
| Tuần 11–12 | Chi phí, chất lượng và hình thức tính phí có kết hợp hài hòa với nhau không? | Rà soát, thử nghiệm định giá, thảo luận về việc tiếp tục | Sổ theo dõi chi phí, đề xuất, tín hiệu tiếp tục, quyết định tiếp theo |

Khi bằng chứng không ủng hộ việc tiếp tục, hãy thu hẹp vấn đề, đổi khách hàng, hoặc dừng lại. Khi bằng chứng ủng hộ, hãy hoàn tất bảo mật, hợp đồng, phân quyền, giám sát và bàn giao trước khi mở rộng.

## 10. Hai mảnh thực hành viết công khai: Từ "trừu tượng" đến "từng khung hình"

Hai bài viết trên WeChat về tôi tiếp cận AI từ hai hướng khác nhau: một bài là chân dung về một phong cách tư duy; bài kia là câu chuyện về cách xử lý một luồng bình luận ồn ào. Chúng không phải là bản kiểm định kỹ thuật, nghiên cứu trường hợp khách hàng, hay bằng chứng về doanh thu. Tôi dùng chúng như tư liệu tường thuật công khai và chuyển hóa những cách làm hữu ích trong đó thành các thí nghiệm có giới hạn rõ ràng.

### 10.1 Từ chối câu trả lời “khả dĩ nhất” đầu tiên

Ngày 11 tháng 8 năm 2026, TokenMany đăng bài [“Han Xiankai: Con người ‘trừu tượng’ nhất trong giới AI”](https://mp.weixin.qq.com/s?src=11&timestamp=1787503349&ver=6922&signature=hsfWcee*q*Okq4gsJ5TpMaWV4vZTwLean6SKtOxCC-EyAf9jWD6l1LQYDny29FqXVImHZFNFDPt*EVH*hVMN2pa91kZtuYfzI81wtV7yahnqVBsKS*c7Ls1uf9QqiEIF&new=1). Bài viết mô tả “trừu tượng” là việc từ chối những câu trả lời có sẵn và để công nghệ, kinh doanh, hành vi con người cùng đời sống thường ngày soi chiếu lẫn nhau. Đó là một nhận xét mang tính văn chương về một hình ảnh công chúng, chứ không phải một phép đo năng lực độc lập.

Tôi biến phần có thể vận dụng thành những thói quen phát triển:

1. ghi lại giả định mặc định, rồi thêm ít nhất một cách giải thích cạnh tranh khác;
2. nén một ý tưởng liên lĩnh vực thành một thí nghiệm có thể chạy trong một đến hai giờ;
3. đánh dấu quan sát nào là sự kiện và quan sát nào là ẩn dụ, trực giác hay giả thuyết;
4. để thí nghiệm bác bỏ một ý tưởng hấp dẫn và lưu mẫu thất bại vào hồ sơ dự án.

Điều này ngăn “có một ý tưởng điên rồ” kết thúc chỉ ở mức một phong cách diễn đạt. Ý tưởng phải trải qua việc xác định vấn đề, một bản mẫu tối thiểu, kiểm thử và tổng kết nhìn lại trước khi trở thành bằng chứng mà người khác có thể kiểm chứng.

### 10.2 Biến tiếng ồn thành một câu hỏi có thể trả lời

Ngày 21 tháng 8 năm 2026, Trung tâm Wanli đăng bài [“Hàn Tiên Khai và AI: Chia tiếng ồn thành cảm xúc, từng khung hình một”](https://mp.weixin.qq.com/s?src=11&timestamp=1787503349&ver=6922&signature=k7g1j*QF9lLWMGUlkAu65EFOmvokb8FoM51LNr4hgn4Q4Cc7q3t3O8Mkac7YnWTJbIVdvX-PXYdZXVHEohJieTOPR*Q2-TVAHuIg2ljgp2BMn8m7STrvovnpW01j817Y&new=1). Theo cách kể chuyện của bài viết, các bình luận được phân loại từng cái một và chú thích bằng “luận điểm, bằng chứng, cường độ cảm xúc, cách diễn đạt và khả năng trả lời”; những lời lăng mạ trước tiên được coi là “mẫu cảm xúc”. Điều này không chứng minh rằng một sản phẩm giám sát dư luận đã được bàn giao, cũng như không chứng minh phân tích đó đã cải thiện kết quả nào. Nó đưa ra một khung xử lý phản hồi đáng để thử nghiệm một cách thận trọng.

Trong một dự án thực tế, tôi sẽ giới hạn nó trong quy trình sau:

| Bước | AI có thể hỗ trợ | Người vẫn chịu trách nhiệm về |
| --- | --- | --- |
| Thu thập | loại trùng lặp, phân cụm và nhận diện các chủ đề lặp lại | nguồn dữ liệu, quyền truy cập, tối thiểu hóa dữ liệu và thời hạn xóa |
| Phân loại | tách biệt luận điểm, phỏng đoán, từ cảm xúc và chiêu thức tu từ | kiểm chứng bằng chứng và không biến nhãn dán thành kết luận |
| Xếp ưu tiên | sắp xếp theo mức độ ảnh hưởng, tính cấp bách và khả năng trả lời | quyết định mức ưu tiên, rủi ro và việc chuyển cấp |
| Phản hồi | soạn thảo vài lời trả lời tiết chế nhắm vào một vấn đề cụ thể | sự thật, quyền riêng tư, trách nhiệm và phạm vi công bố |
| Rà soát | tóm tắt các thay đổi, những hiểu lầm lặp lại và vấn đề còn bỏ ngỏ | quyết định thay đổi sản phẩm, làm rõ, tạm dừng hay dừng hẳn |

Bình luận, phiếu hỗ trợ và phản hồi của khách hàng có thể chứa dữ liệu cá nhân. Nếu chưa được phép, đừng gửi toàn bộ hội thoại, tên, thông tin liên hệ hay ngữ cảnh nhận dạng người nào cho một mô hình tổng quát. Ngay cả dữ liệu công khai cũng cần được che giấu thông tin định danh, giới hạn quyền truy cập và đặt thời hạn lưu giữ. AI có thể sắp tiếng ồn vào hàng đợi, nhưng nó không thể quyết định ai đúng ai sai, cũng không thể gánh trách nhiệm cho một phản hồi công khai.

Bài học chung từ những bài viết này rất đơn giản: sáng tạo mang đến một lối vào khác biệt, còn bằng chứng quyết định có nên đi tiếp hay không. Cảm xúc xứng đáng được lắng nghe, nhưng nó chỉ được đưa vào sản phẩm hay quy trình doanh nghiệp sau khi sự thật, quyền riêng tư và trách nhiệm đã hoàn thành phần việc của mình.

## 11. Nơi Con Đường Mất Kiểm Soát

- coi đầu ra của mô hình như sự thật và phần minh họa như chất lượng sản phẩm;
- nhầm doanh thu từ một dự án đơn lẻ là một công việc kinh doanh bền vững;
- chỉ tính chi phí API mà bỏ qua thời gian dành cho hỗ trợ, làm lại, tuân thủ, bán hàng và quản lý;
- tải dữ liệu khách hàng, bí mật công ty, hay tài liệu riêng tư của bên thứ ba lên một công cụ chưa được phê duyệt;
- bị trói buộc vào một mô hình hay nhà cung cấp duy nhất mà không có phương án chuyển đổi, suy giảm hay ứng phó sự cố;
- hứa hẹn thời gian phản hồi, độ khả dụng hay khả năng tuân thủ mà đội ngũ không thể đảm bảo một cách đáng tin cậy;
- giới thiệu một sản phẩm có liên quan dưới dạng bài đánh giá độc lập hoặc che giấu mối quan hệ đó;
- dùng thêm prompt để lấp chỗ trống của việc thiếu người dùng thật, chi phí thật hay nghiệm thu thật.

Dự án này sẽ giữ một vài nguyên tắc đơn giản: nguồn dữ liệu luôn truy được nguồn gốc, các quyền lợi được công khai, kết quả có thể kiểm chứng lại, rủi ro không bị tô hồng, và điều chưa biết được gọi tên đúng là chưa biết.

## 12. Những gì tôi hy vọng để lại

Ngay cả khi con đường này không trở thành một doanh nghiệp đủ lớn, nó vẫn nên để lại ba điều:

1. một phương pháp giúp tôi và đội ngũ học tập và xây dựng nhanh hơn mà không từ bỏ chất lượng;
2. sản phẩm công việc thực sự mà người dùng có thể sử dụng, thử nghiệm và phê bình;
3. một hồ sơ kinh doanh không xóa đi thất bại, để người đọc sau này có thể thấy phán đoán nào đã hiệu quả và phán đoán nào lúc đó chỉ là hy vọng.

Tôi vẫn muốn kiếm tiền vì doanh thu là một dạng bằng chứng cho thấy việc trao đổi giá trị có thể tiếp tục. Đó không phải là giá trị duy nhất, cũng không phải là một kết thúc có thể công bố trước. Mục tiêu trung thực hơn là kết nối năng lực AI với con người thực, tổ chức thực và trách nhiệm thực, rồi xem công việc có xứng đáng để tiếp tục hay không.

## Nguồn tham khảo và Xác minh

- **Kinh nghiệm cá nhân**: thất bại năm 2022, quá trình phục hồi năm 2023 và việc trở lại với AI năm 2026 được ghi lại trong [Câu chuyện của tôi](../part-2/my-story.md) và [Khởi nghiệp](../part-2/entrepreneurship.md).
- **Liên quan đến các dự án**: China Token Cloud, `token.love`, `ku0.com` và các bài viết trên WeChat được công bố trong [Các dự án của tác giả và thực tiễn thực tế](../../projects.md); đây không phải là các đánh giá độc lập.
- **Tuyên bố thương mại**: mô hình tính phí, sổ cái chi phí và lộ trình mười hai tuần là những phương pháp cần thử nghiệm, không phải bằng chứng về doanh thu, số lượng khách hàng, lợi nhuận hay hiệu quả đầu tư.
- **Các trang chính thức đã kiểm tra**: ngày 1 tháng 9 năm 2026. Phần định vị trên trang chủ của `token.love` và `ku0.com`, cũng như các liên kết bài viết bên ngoài trong chương này, đều truy cập được; hãy xác minh lại chính xác năng lực, phạm vi dịch vụ, khu vực, chính sách và các cam kết hợp đồng trong dự án thực tế.

## Đưa phương pháp trở về đời sống thường ngày

Chương này không nên để người đọc lạc lõng giữa những tên sản phẩm, sơ đồ kiến trúc và các cổng sạc. Phần còn lại hữu ích của nó là một tư thế làm việc chậm rãi và trung thực hơn: gọi tên vấn đề, viết ra ranh giới, và đặt một lần chạy, một chi phí, một thất bại vào nơi có thể kiểm chứng được.

Dự án có tiếp tục hay không vẫn là câu hỏi thuộc về người dùng, đội ngũ, các thỏa thuận, thời gian và trách nhiệm. Hãy xem [Các dự án của tác giả và thực tiễn thực tế](../../projects.md) để kiểm tra các mối quan hệ, hiện trạng và ranh giới của bằng chứng; hoặc đi thẳng vào [Phần IV: Thực hành và phục hồi](../part-4/practice-and-recovery.md) và đem phán đoán ở đây áp vào một nhiệm vụ nhỏ, một nhịp độ làm việc trong một tuần, và một hành động có thể bắt đầu lại.

Công nghệ có thể lát một con đường rất nhanh. Điều đó không có nghĩa là đã có ai đi qua con đường đó. Thứ mang theo được vào chặng tiếp theo không phải là một màn trình diễn đẹp mắt, mà là khả năng tiếp tục học hỏi, bàn giao và chỉnh sửa trong điều kiện thực tế.
