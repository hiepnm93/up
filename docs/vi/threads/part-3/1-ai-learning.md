---
title: "Learning Anything with AI: From Real Problems to Verifiable Delivery"
description: Based on Han Xiankai's product failure, recovery, and return to AI practice, this chapter builds a practical loop of problems, baselines, practice, delivery, verification, and review.
updated: 2026-10-03
sources_checked: 2026-10-03
---

# Học mọi thứ với AI: Từ vấn đề thực tế đến sản phẩm có thể kiểm chứng

Tôi tên là Han Xiankai, trên mạng còn được biết đến với biệt danh Li Pu. Nhiều bạn đọc biết đến tôi lần đầu qua việc học tiếng Anh, sau đó qua những câu chuyện về phần mềm, quán ăn, một công ty thất bại, sức khỏe suy yếu, và sự trở lại với công nghệ cùng AI. Giờ đây tôi xem AI như một hạ tầng phục vụ việc học, chứ không phải một nút bấm thay tôi suy nghĩ.

Phương pháp này xuất phát từ một sự thật khó chấp nhận: một câu trả lời có thể trọn vẹn trong khi sản phẩm chẳng có người dùng; mã nguồn có thể chạy được trong khi dữ liệu và bảo mật không có nền tảng vững chắc; một người có thể trò chuyện có vẻ thông minh nhưng vẫn không thể tự mình làm được sau khi kết thúc trò chuyện. Một kết quả học tập thực sự vẫn đứng vững ngay cả khi không có AI: bạn có thể giải thích, đánh giá, thực hiện, vận dụng sang lĩnh vực khác, và để lại bằng chứng mà người khác có thể kiểm tra.

Với các tác vụ hỗ trợ bằng AI có thể lặp lại, hãy tiếp tục với [Quy trình làm việc với AI](../practice/ai-workflows.md). Trước khi so sánh các phiên bản hoặc bàn giao cho người khác, hãy dùng [Biên bản đánh giá AI](../../templates/ai-evaluation.md) để lưu lại các thất bại, những chỉnh sửa của con người và chi phí.

Khi các công cụ mới đua nhau thu hút sự chú ý, hãy bắt đầu với [Xu hướng AI và lộ trình học tập](6-ai-trends-and-learning-roadmap.md). Hãy tách biệt năng lực quan sát được, các tuyên bố của nhà cung cấp, và dự đoán của chính bạn trước khi chọn một thay đổi để thử nghiệm. Bạn không cần theo đuổi từng bản phát hành; bạn cần xây dựng cho mình tiêu chí để lựa chọn.

## Tổng quan nhanh

- xác định kết quả thực sự cần đạt trước khi quyết định đặt AI vào đâu;
- so sánh ba trạng thái: làm một mình (không hỗ trợ), có AI hỗ trợ, và kiểm tra lại độc lập sau một khoảng trễ;
- đưa nguồn dữ liệu, quyền truy cập, quyền riêng tư, chi phí và quyền sở hữu vào phạm vi của nhiệm vụ;
- lưu trạng thái ở cuối phiên để phiên tiếp theo không phụ thuộc vào bộ nhớ hội thoại.

## Phương pháp này đến từ đâu

Những nội dung dưới đây là ghi chép cá nhân, không phải kết quả nghiên cứu hay lời hứa đúng cho mọi trường hợp. Hãy đọc từng tình huống theo bốn bước: chuyện gì đã xảy ra, phán đoán nào đã sai, nguyên tắc nào được rút ra, và hôm nay bạn có thể luyện tập điều gì.

Nếu bạn đang phân tích một hồ sơ công khai, một trải nghiệm dự án AI, hay nhật ký thất bại của chính mình, hãy sao chép [Mẫu Nhìn lại Trường hợp AI](../../templates/ai-case-review.md) trước tiên. Tách bạch nguồn thông tin, sự kiện, phán đoán, kết quả và nguyên tắc có thể vận dụng. Mẫu này không thể chứng minh giúp bạn một kết quả, nhưng nó có thể ngăn một câu chuyện lặng lẽ biến thành kết luận.

### 2015–2016: Từ ngõ cụt đến người dùng thật

Sau những thất bại quanh kỳ thực tập và tốt nghiệp, tôi về nhà. Năm 2016, tôi bắt tay làm `bt0.com`, một trang web phim nhỏ, rồi sau đó nhận thêm việc thiết kế web. Đó không phải là một sản phẩm lớn lao, nhưng nó có người dùng thật, có phản hồi, và có dấu vết sử dụng.

Cái sai dễ mắc phải là coi "tôi xây dựng được" thành "người ta cần nó". Thứ thay đổi cách nhìn của tôi không phải là một bài học công nghệ khác. Mà là việc tận mắt thấy người ta dùng, góp ý, và rời đi vì một chi tiết nhỏ.

**Nguyên tắc**: việc học bắt đầu từ một vấn đề thật; công việc bộc lộ lỗ hổng tốt hơn những câu答案 thu thập được.

**Thử ngay hôm nay**: chọn một vấn đề mà người quen của bạn thực sự gặp phải. Không dùng AI, viết một trang nêu rõ đối tượng, hành động, tiêu chí hoàn thành, và ba điều bạn chưa biết.

### 2017–2022: Từ tái cấu trúc front-end đến ràng buộc của tổ chức

Năm 2017 tôi gia nhập một công ty phần mềm phục vụ luật sư và các hãng luật. Tôi đi từ lập trình viên front-end lên trưởng nhóm, tổng quản lý rồi đối tác. Sản phẩm thời kỳ đầu đến từ dự án gia công và yêu cầu thay đổi liên tục; sau này tôi dẫn dắt việc viết lại bằng Vue, nhưng sản phẩm phát hành ra thì lâu dài không có nổi một đơn hàng.

Bài học là nỗ lực, tái cấu trúc và số lượng tính năng không thể thay thế việc khám phá vấn đề, kiểm chứng với người dùng và phối hợp đội nhóm. Một người học cách viết code không có nghĩa là cả tổ chức đã học cách bàn giao sản phẩm.

**Nguyên tắc**: hãy viết việc học thành một nhiệm vụ cụ thể, chứ không phải “hiểu về một chủ đề”; mỗi bước đều cần có người theo dõi và tiêu chí nghiệm thu.

**Thử ngay hôm nay**: thay vì “học quản trị sản phẩm”, hãy “viết một bản tóm tắt một trang cho một người dùng thật trong 45 phút và để người đó bác bỏ một giả định”.

### 2022: Nhầm tìm kiếm và cấu hình sẵn là AI

Doanh thu giảm mạnh vào năm 2022. Khi bạn cùng bàn thời phổ thông của tôi gia nhập, chúng tôi phát hiện một cấu trúc dự án cũ kỹ, các vấn đề về hiệu năng và bảo mật, cùng những tính năng "dữ liệu lớn" và "AI" mà không có tập dữ liệu thực hay nền tảng huấn luyện nào. Vài tính năng thực chất chỉ là kết quả tìm kiếm và cấu hình sẵn.

Chúng tôi đã bỏ quá nhiều công sức vào giao diện, hỗ trợ đa nền tảng và tích luỹ tính năng trước khi xác nhận rằng năng lực cốt lõi và dữ liệu có thật hay không. Công ty cuối cùng cũng phải đóng cửa. Những bản trình diễn đẹp hơn không thể xoá đi tổn thất hay trách nhiệm.

**Nguyên tắc**: bản trình diễn không phải là năng lực, câu trả lời mẫu không phải là sự thật, và tốc độ sinh nội dung không phải là chất lượng bàn giao. Mọi khẳng định quan trọng phải quay về với nguồn gốc, kiểm chứng, người dùng và một người chịu trách nhiệm.

**Thử ngay hôm nay**: nhờ AI giải thích một chủ đề bạn quen thuộc. Sau đó, không nhìn vào đoạn chat, hãy viết ra các nguồn của nó, một ví dụ phản bác, một điểm chưa rõ, và một phép kiểm chứng có thể bác bỏ nó. Phần nào bạn không viết được chính là khoảng trống kiến thức của bạn.

### 2023: Lấy lại khả năng hành động

Sau khi công ty thất bại, tôi đóng GitHub, rời nhiều nhóm, chơi game, và đánh mất ranh giới của cuộc sống thường ngày. Khi quay về nhà, bước đầu tiên không phải là thành lập một công ty khác. Mà là ăn uống, ngủ nghỉ, ra ngoài, đối diện với quá khứ, và giảm khối lượng công việc xuống mức tôi có thể hoàn thành.

**Nguyên tắc**: một hệ thống học tập phải bao gồm cả năng lượng, sức khỏe, và những trách nhiệm bình thường. Sự đều đặn quan trọng hơn những cơn hứng trí ngắn ngủi, và một giai đoạn khó khăn không nên được đánh giá qua một sự hồi phục ngoạn mục.

**Thử ngay hôm nay**: dành 5–15 phút cho một hành động đã để dành: sắp xếp một trang ghi chép, chạy một bài kiểm tra, nghe một đoạn băng, hoặc viết ba câu. Ghi lại điều đã xảy ra thay vì trốn trong một kế hoạch.

### 2026: Trở lại với AI và các ngành thực thể

Năm 2026, với vai trò chủ tịch Công ty TNHH Điện toán đám mây China Token, tôi quay trở lại với công nghệ, dịch vụ doanh nghiệp và thực tiễn các ngành thực thể. Tôi đang tìm hiểu ứng dụng AI cho nông nghiệp, lâm nghiệp, chăn nuôi, thủy sản và các môi trường thực tế khác, đồng thời dự kiến cung cấp đào tạo cơ bản cho các hợp tác xã nông thôn. Đây là một định hướng và kế hoạch cá nhân, không phải bằng chứng về doanh thu, số lượng khách hàng hay tác động.

**Nguyên tắc**: AI cuối cùng phải bước vào một quy trình làm việc thực sự và chấp nhận các ràng buộc về chi phí, phân quyền, quyền riêng tư, phản hồi của người dùng, sự cố và khôi phục.

**Thử ngay hôm nay**: với một bài toán tổ chức, hãy viết ra dữ liệu đi vào từ đâu, ai có thể xem nó, cái gì được coi là đạt yêu cầu, công việc dừng lại thế nào khi có sự cố, và bạn sẽ gánh phần trách nhiệm nào với tư cách con người.

## Vòng lặp bảy bước

1. **Xác định kết quả cụ thể**: tình huống, đối tượng, hành động, thời hạn và tiêu chí chấp nhận.
2. **Lưu lại điểm xuất phát khi tự làm**: thử làm bài trước để bộc lộ những thiếu sót và điểm mù của mình.
3. **Chuẩn bị tài liệu đáng tin cậy**: ưu tiên tài liệu chính thức, sách, bài nghiên cứu, dữ liệu, mã nguồn và các trường hợp thực tế.
4. **Thiết kế luyện tập có hướng dẫn**: yêu cầu AI đặt câu hỏi, giải thích, so sánh, gợi ý và tạo các bài tập song song, nhưng không làm bước quan trọng thay bạn.
5. **Tự tay thực hiện**: đóng tài liệu lại rồi tự giải thích, lập trình, viết, tính toán, trình bày hoặc ra quyết định.
6. **Dùng nhiều nguồn phản hồi**: tài liệu, bài kiểm tra, chuyên gia, người dùng và việc rà soát bảo mật cùng AI cùng đánh giá kết quả.
7. **Cập nhật trạng thái**: lưu lại công việc đã làm, lỗi, chi phí, những câu hỏi còn bỏ ngỏ và nhiệm vụ nhỏ nhất tiếp theo.

Thiếu bước một, AI biến mong muốn thành một câu trả lời thay bạn. Thiếu bước hai, bạn không thể thấy mình tiến bộ. Thiếu bước sáu và bảy, lỗi sẽ quay lại trong cuộc trò chuyện tiếp theo.

## Học AI qua năm lớp

Học cùng AI và học cách xây dựng ứng dụng AI có thể hỗ trợ lẫn nhau, nhưng đòi hỏi những cách luyện tập khác nhau. Cái trước giúp bạn gìn giữ khả năng ghi nhớ, hiểu và diễn đạt của chính mình. Cái sau còn đòi hỏi bạn phải biết dữ liệu đi vào hệ thống như thế nào, công cụ hành động ra sao, và kết quả được kiểm tra ra sao. Hãy dùng các lớp này để xác định vị trí vấn đề trước khi quyết định huấn luyện một mô hình.

| Lớp | Diễn giải bằng lời của bạn | Bài tập để lại bằng chứng |
| --- | --- | --- |
| Mô hình và đầu ra | Câu trả lời phụ thuộc vào đầu vào và quá trình sinh văn bản; sự trôi chảy không chứng minh tính đúng đắn | Tìm một câu trả lời sai trong lĩnh vực bạn quen thuộc và giữ lại bằng chứng phản bác |
| Ngữ cảnh và truy xuất | Ngữ cảnh là tài liệu được cung cấp cho tác vụ hiện tại; truy xuất là tìm tài liệu liên quan để cung cấp | Trả lời câu hỏi dựa trên ba tài liệu công khai, liên kết mỗi khẳng định với một đoạn trích |
| Cấu trúc và công cụ | Trường dữ liệu hợp lệ không chứng minh nội dung đúng với thực tế; một lệnh gọi công cụ được yêu cầu không chứng minh nó đã được thực thi | Kiểm tra trường bị thiếu, con số sai và lỗi công cụ |
| Quy trình và đánh giá | Các bước, quyền hạn, cách xử lý lỗi và tiêu chí nghiệm thu cùng nhau quyết định tính hữu ích | So sánh quy trình thủ công với quy trình dùng AI, ghi lại các lỗi xảy ra và tổng thời gian |
| Học hỏi và chuyển giao | Chất lượng kết quả khi có hỗ trợ và năng lực làm độc lập cần được đo lường riêng | Thay đổi một điều kiện và làm lại sau ba đến bảy ngày mà không xem lại câu trả lời cũ |

Sinh văn bản có hỗ trợ truy xuất (RAG) thường cung cấp tài liệu đã truy xuất được trước khi trả lời; còn tinh chỉnh (fine-tuning) thay đổi các tham số của mô hình thông qua huấn luyện. Hai kỹ thuật này giải quyết những vấn đề khác nhau. Nếu gặp thông tin lạc hậu, thiếu nguồn hoặc phạm vi tìm kiếm sai, hãy khảo sát tài liệu và cách truy xuất trước. Tinh chỉnh không tự động mang lại thông tin cập nhật, trích dẫn chính xác hay quyền thực hiện hành động. Hãy xác định điểm hỏng trước khi chọn kỹ thuật.

Xem [giải thích về RAG và fine-tuning của IBM](https://www.ibm.com/think/topics/rag-vs-fine-tuning) để nắm sự khác biệt về mặt khái niệm (đăng ngày 14 tháng 8 năm 2024; kiểm tra ngày 3 tháng 10 năm 2026). Chuỗi bài tập và cách xử lý sự cố ở trên là lựa chọn giảng dạy của tài liệu này, không phải cam kết về kết quả học tập từ nguồn đó.

Người đọc không biết lập trình vẫn có thể hoàn thành các bài tập này: quản lý tài liệu trong thư mục, ghi lại nội dung so sánh vào bảng, và nhờ một người đọc thật kiểm tra kết quả. Khi chuyển sang phát triển ứng dụng, hãy lần lượt học API, đầu ra có cấu trúc, lệnh gọi công cụ và kiểm thử, gắn mỗi khái niệm với một vấn đề bạn đã từng gặp.

## Bản tóm tắt công việc một trang

Sao chép toàn bộ [Bản tóm tắt công việc AI](../../templates/ai-task-brief.md) vào một thư mục dự án riêng tư. Khối bên dưới chỉ giữ lại những trường tối thiểu. Che giấu thông tin nhạy cảm; không bao giờ gửi mật khẩu, giấy tờ tùy thân, hồ sơ khách hàng hay dữ liệu riêng tư của bên thứ ba cho một mô hình tổng quát.

```markdown
# AI Task Brief

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
Human reviewer:
Rollback or stop condition:
```

"Trải nghiệm tốt", "kiến trúc nâng cao" và "học AI" không phải là tiêu chí nghiệm thu. Hãy dùng các hành động quan sát được, ví dụ như "người dùng có thể nhập một tệp trong mười phút và nhận được báo cáo lỗi rõ ràng, dễ hiểu".

## Giao thức phiên làm việc tối giản

Trước khi bắt đầu, chỉ yêu cầu AI nhắc lại ranh giới:

```text
Restate in no more than eight bullets: goal, audience, inputs, acceptance criteria, constraints, unknowns, and what you cannot verify.
List the sources you intend to use. Mark source-free facts as unverified.
Do not produce the final deliverable. Identify the three risks most likely to cause rework.
```

Trong quá trình làm việc, mỗi lần chỉ tiến thêm một đoạn công việc có thể kiểm tra được:

```text
Break the task into the smallest verifiable slices. Advance one slice at a time and state input, assumption, change, check, and next step.
If a prerequisite conflicts, pause and ask. Do not silently replace the requirement. Keep failed approaches and reasons.
```

Kết thúc, hãy tạo một bản cập nhật trạng thái thay vì một bài viết chỉn chu:

```text
Based only on what happened in this session, output:
1. completed work and evidence location;
2. judgments confirmed by a source, test, or person;
3. recurring errors, risks, and open questions;
4. the smallest next task, acceptance criteria, and required material.
Do not claim to remember another session or turn inference into fact.
```

## Những Đầu Ra Khác Nhau Cần Bằng Chứng Khác Nhau

| Đầu ra | Bằng chứng tối thiểu | Bằng chứng mạnh hơn |
| --- | --- | --- |
| Giải thích | Nguồn sơ cấp, thuật ngữ chính, các điểm chưa chắc chắn | Diễn đạt lại không cần tài liệu, phản ví dụ, bài tập vận dụng |
| Code | Kết quả chạy, kiểm thử cơ bản | Kiểm thử biên, kiểm tra tĩnh, rà soát bảo mật, dữ liệu mẫu thực tế |
| Nghiên cứu | Liên kết nguồn sơ cấp cho các sự kiện quan trọng | Đối chiếu nhiều nguồn, định nghĩa, ngày tháng, phản ví dụ |
| Văn bản | Đối tượng đọc, mục đích, sự kiện, cấu trúc | Phản hồi từ người đọc thật, hồ sơ chỉnh sửa, so sánh các phiên bản |
| Quyết định | Các lựa chọn, giả định, chi phí, rủi ro | Thử nghiệm quy mô nhỏ, nhật ký quyết định, đánh giá sau hành động |
| Giảng dạy | Mục tiêu và kết quả luyện tập | Vận dụng độc lập, kiểm tra lại sau một thời gian, xử lý các lỗi biến đổi |

Với nội dung có rủi ro cao, nói "chưa được xác nhận" vẫn chuyên nghiệp hơn là một phỏng đoán trôi chảy.

## Ba phép so sánh: Chứng minh AI đã thay đổi điều gì

Dùng [Nhật ký học tập với AI](../../templates/ai-learning-log.md) để lưu lại ba mẫu của cùng một nhiệm vụ:

1. **Mốc cơ bản không hỗ trợ**: hoàn thành nhiệm vụ một cách độc lập và ghi lại thời gian, chất lượng, điểm nghẽn và mức độ tự tin;
2. **Phiên bản có hỗ trợ**: để AI chỉ làm phần công việc đã thỏa thuận và ghi lại các câu lệnh (prompt), nguồn tài liệu, gợi ý được chấp nhận/bị loại bỏ, và phần phải làm lại;
3. **Phiên bản độc lập trì hoãn**: sau 3–7 ngày, đóng khung chat và bản đáp án, sau đó làm lại trong một điều kiện tương tự.

| Kết quả so sánh | Cách diễn giải thận trọng |
| --- | --- |
| Cả phiên bản có hỗ trợ và phiên bản độc lập đều tiến bộ | AI có thể đã cung cấp "giàn giáo" học tập hữu ích mà kết quả vẫn thuộc về bạn |
| Phiên bản có hỗ trợ tiến bộ còn phiên bản độc lập thụt lùi | Sản phẩm tốt hơn, nhưng một bước then chốt có thể đã bị "thuê ngoài" |
| Thời gian giảm trong khi khối lượng làm lại và lỗi tăng lên | Bạn có được tốc độ nhưng tích lũy "nợ tốc độ" |
| Mức tự tin tăng trong khi độ chính xác không đổi hoặc thấp hơn | Hiệu chỉnh lại mức tự tin trước khi trao cho công cụ nhiều quyền truy cập hơn |

Ghi lại việc hoàn thành nhiệm vụ, chất lượng, hiệu quả làm việc độc lập, phần phải làm lại, chi phí và khả năng chuyển giao. Một phép so sánh không thể chứng minh quan hệ nhân quả, nhưng nó dễ kiểm chứng hơn là cảm nhận "AI có vẻ hữu ích".

## Các Lỗi Thường Gặp và Bàn Giao

| Điểm lỗi | Tín hiệu | Hành động ngay lập tức |
| --- | --- | --- |
| Sự kiện bịa đặt | Không tìm được nguồn, phiên bản hay vị trí dữ liệu nào | Ngừng chia sẻ; quay lại nguồn sơ cấp và đánh dấu là chưa xác minh |
| Lệch yêu cầu | Câu trả lời ngày càng đầy đủ nhưng không còn trả lời đúng công việc ban đầu | Dán lại yêu cầu gốc và hỏi về các điểm mâu thuẫn và chưa rõ |
| Rò rỉ riêng tư | Đầu vào chứa thông tin khách hàng, định danh, sức khỏe hoặc khóa bảo mật | Ngừng tải lên; che giấu thông tin nhạy cảm hoặc dùng môi trường được phê duyệt |
| Hoàn thành giả | Code chạy được nhưng không có kiểm thử trường hợp biên, hoặc văn bản hay mà không có trích dẫn | Chạy bài kiểm tra nghiệm thu nhỏ nhất; trôi chảy không có nghĩa là hoàn thành |
| Phụ thuộc phiên làm việc | Bạn không thể giải thích bước tiếp theo nếu rời khỏi cuộc trò chuyện | Lưu lại trong [Nhật ký Học tập AI](../../templates/ai-learning-log.md) và [Trạng thái Học tập](../../templates/learning-state.md) |

Khi bàn giao, cần lưu lại mục tiêu hiện tại, công việc đã hoàn thành và vị trí bằng chứng, các sự kiện chưa xác nhận, lỗi và rủi ro, chi phí, việc nhỏ nhất cần làm tiếp theo, và điều kiện dừng/quay lui. Cửa sổ trò chuyện chỉ là nơi làm việc tạm thời, không phải kho lưu trữ duy nhất của dự án.

## Từ Học đến Triển Khai

Khi một nhiệm vụ trở thành mã lệnh hoặc dự án của cả nhóm, hãy thêm ba chốt kiểm soát:

- **Giải thích được**: người phụ trách có thể giải thích các quyết định quan trọng mà không cần xem lại đoạn hội thoại;
- **Kiểm thử được**: dữ liệu thực tế, các trường hợp biên, phân quyền và đường dẫn lỗi đều được kiểm tra;
- **Khôi phục được**: ai đó biết rõ ai tạm dừng, ai được thông báo, và cách khắc phục khi có rủi ro hoặc sự cố.

Dùng một thư mục dùng được ở nhiều nơi:

```text
00-brief/       task brief and acceptance criteria
01-baseline/    unaided sample and initial tests
02-sources/     primary material, licences, source index
03-working/     drafts, experiments, prompts
04-output/      deliverable, recording, build artefact
05-feedback/    user feedback and error categories
06-decisions/   decision log and open questions
07-operations/  permissions, monitoring, deployment, rollback
learning-state.md
```

## Dữ liệu, Quyền riêng tư và Bản quyền

| Cấp độ | Ví dụ | Cách xử lý mặc định |
| --- | --- | --- |
| Công khai | Tài liệu đã công bố, mã nguồn mở, dữ liệu công khai | Kiểm tra nguồn và giấy phép trước khi sử dụng |
| Nội bộ | Kế hoạch, quy trình chưa công bố, nhật ký không nhạy cảm | Chỉ dùng công cụ đã được phê duyệt; giới hạn số thành viên và thời gian lưu giữ |
| Mật | Hồ sơ khách hàng, hợp đồng, chiến lược kinh doanh, lỗ hổng bảo mật chưa công bố | Không tải lên khi chưa được phê duyệt; ưu tiên xử lý cục bộ hoặc che giấu thông tin nhạy cảm |
| Tối mật | Khóa bảo mật, dữ liệu định danh/sức khỏe, dữ liệu trẻ em, tài liệu riêng tư của bên thứ ba | Không đưa vào các mô hình dùng chung; tuân theo chính sách và pháp luật |

Xóa một tệp không đồng nghĩa với việc xóa lịch sử, liên kết chia sẻ, bản xuất, bộ nhớ đệm hay bản sao lưu. Bài viết công khai cũng có thể chứa dữ liệu cá nhân; hãy xác nhận sự cho phép, phạm vi tối thiểu cần thiết và thời gian lưu giữ trước khi xử lý chúng.

## Bảy Ngày, Ba Mươi Ngày, Mười Hai Tuần

### Bảy ngày: một sản phẩm nhỏ lặp lại được

- viết bản tóm tắt yêu cầu và tiêu chí nghiệm thu;
- lưu lại kết quả gốc làm mốc khi chưa dùng AI;
- hoàn thành một sản phẩm làm trong một đến ba giờ bằng cách dùng vòng lặp;
- lưu nguồn tham khảo, prompt, bài kiểm thử, phản hồi và trạng thái công việc;
- ghi lại chỗ AI giúp được, chỗ AI đánh lạc hướng, và phần việc còn lại khi không có nó.

### Ba mươi ngày: một quy trình làm việc có thể lặp lại

- hoàn thành bốn vòng lặp cho một công việc định kỳ;
- so sánh thời gian, chất lượng, việc phải làm lại, chi phí và khả năng thực hiện độc lập;
- loại bỏ những bước không làm kết quả tốt hơn;
- tiến hành tổng kết cả những thất bại, chứ không chỉ trình diễn thành công.

### Mười hai tuần: bàn giao cho người dùng hoặc tổ chức thực

- thu thập phản hồi từ người dùng thực sau mỗi hai đến bốn tuần;
- hoàn tất rà soát về tính chính xác, kiểm thử, bảo mật, quyền riêng tư, bản quyền, chi phí và bàn giao;
- xuất toàn bộ tài liệu và trạng thái, sau đó viết tổng kết và quyết định cho chu kỳ tiếp theo;
- nếu bằng chứng còn yếu, hãy thu hẹp vấn đề, thay đổi đối tượng hoặc dừng lại thay vì thêm nhiều câu lệnh (prompt).

Đưa ba phép so sánh và kết quả chu kỳ vào [Bản đồ chu kỳ 90 ngày](../../templates/90-day-cycle.md), thay đổi một biến số trong chu kỳ tiếp theo.

## Nguồn và xác minh

- **Trải nghiệm cá nhân**: chủ yếu là [Câu chuyện của tôi](../part-2/my-story.md), [Khởi nghiệp](../part-2/entrepreneurship.md) và [Dự án và thực hành của tác giả](../../projects.md). Đây là những ghi chép cá nhân, không phải quy luật áp dụng cho mọi người.
- **Thông tin sản phẩm**: các trang trợ giúp chính thức được nêu trong [Học tiếng Anh với AI](../part-1/7-ai.md); tính năng, khu vực phục vụ và gói dịch vụ đều có thể thay đổi.
- **Tình trạng dự án**: China Token Cloud, `token.love`, các bài viết công khai và các kế hoạch hướng tới ngành thực đều có yếu tố gắn bó cá nhân hoặc phạm vi chưa được kiểm chứng; không nguồn nào là đánh giá độc lập hay bằng chứng về doanh thu.
- **Kiểm tra lần cuối**: ngày 3 tháng 10 năm 2026. Hãy kiểm tra lại tính năng sản phẩm và tình trạng dự án trước khi sử dụng thực tế; các nguồn về khái niệm AI mới được liên kết trong chương sách và trong sổ ghi nhận nguồn trích dẫn.

## Phần kết: Giữ lại Năng lực nơi Con người

AI dễ dàng tạo ra nhiều hơn những câu trả lời sai. Nó tạo ra cảm giác đã hoàn thành một cách nonớm. Phần giải thích trôi chảy, mã chạy được, kế hoạch đã được sắp đặt, và chúng ta bắt đầu tin rằng vấn đề đã được thấu hiểu. Câu trả lời có thể đến nhanh hơn nhiều so với thời gian hình thành nên phán đoán.

Một việc học đáng để tiếp tục phải để lại những thứ mà cuộc hội thoại không thể mang đi: một câu hỏi chính xác hơn, một nguồn có thể truy vết, một bài kiểm tra thất bại, một phán đoán được thay đổi bằng bằng chứng, một sản phẩm mà người khác có thể sử dụng, và một con người vẫn biết phải làm gì sau khi công cụ được đóng lại.

Học không phải là nhờ AI đến đích thay bạn. Mà là dùng công cụ để chạm tới điều bạn chưa thể nhìn thấy, rồi tự mình kiểm chứng lại nền móng. Đóng cửa sổ, giải thích công việc cho một người thật, hoàn thành bước tiếp theo, và mang kết quả theo mình. Nếu năng lực đi theo bạn ra khỏi cuộc hội thoại, nó đã bắt đầu bám rễ.
