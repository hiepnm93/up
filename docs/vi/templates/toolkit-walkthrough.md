---
title: "Toolkit Walkthrough: Let AI Continue a 90-Day Learning Project across Sessions"
description: Use an explicitly synthetic Python-learning case to show how Learning State, an AI Task Brief, an unaided baseline, an artifact, an Evidence Chain, Weekly Review, and a Reader Field Note hand work over.
updated: 2026-09-02
---

# Hướng dẫn từng bước bộ công cụ: Để AI tiếp tục một dự án học tập 90 ngày qua nhiều phiên làm việc

Nhiều độc giả không thiếu kế hoạch. Họ chỉ không biết khi nào thì nên mở từng tờ bài tập. Một vấn đề phổ biến khác thường xuất hiện trong một dự án học kéo dài ba tháng: một cuộc trò chuyện với AI trở nên quá dài, trong khi một cuộc trò chuyện mới dường như xóa sạch mọi tiến độ trước đó.

Giải pháp không phải là yêu cầu AI phải có trí nhớ vĩnh viễn. **Hãy để một tệp tin lưu giữ trạng thái, và để AI xử lý công việc hiện tại.**

Trang này dùng ví dụ một người đang học Python để chuẩn bị chuyển ngành như một bài hướng dẫn hoàn chỉnh từ đầu đến cuối. Nhân vật, các nhiệm vụ, kết quả code, điểm số và phản hồi đều là dữ liệu giả lập. Chúng chỉ minh họa cách điền vào các công cụ; chúng không phải là kết quả thực tế của một độc giả nào và không chứng minh rằng chín mươi ngày là đủ để chuyển ngành.

## Đây Không Phải Là Một Câu Chuyện Thành Công

Học viên minh họa có những điều kiện sau:

- Đọc được biến, câu điều kiện và vòng lặp đơn giản nhưng chưa thể tự mình hoàn thành một chương trình nhỏ;
- Có thể đều đặn dành bốn buổi học 45 phút mỗi tuần;
- Có mục tiêu trong chín mươi ngày tự hoàn thành một công cụ dòng lệnh đọc tệp CSV, kiểm tra tính hợp lệ của từng dòng và in ra bản tóm tắt;
- Không tải dữ liệu của công ty lên, không nhờ AI viết sản phẩm cuối cùng, và không đánh đổi những lần gián đoạn bằng việc mất ngủ;
- Không thêm framework hay khóa học khác nếu đến ngày thứ mười bốn vẫn không giải thích được phần mã lõi.

Những điều kiện này chỉ là giới hạn để minh họa. Điểm xuất phát, quỹ thời gian, thể trạng, công việc và mục tiêu của bạn có thể khác hoàn toàn.

## Tình huống: Vì sao kế hoạch đánh mất trí nhớ của nó

Sai lầm ban đầu là để tất cả mọi thứ nằm trong một cửa sổ trò chuyện:

1. Yêu cầu AI lập kế hoạch mười hai tuần;
2. Mỗi ngày đều đặt câu hỏi, luyện tập và chỉnh sửa code trong cùng một cuộc trò chuyện;
3. Phải dựa vào các tin nhắn trước đó để lưu giữ lỗi, tiến độ và bước tiếp theo;
4. Khi ngữ cảnh dài ra, các câu trả lời mới bắt đầu lẫn lộn với các nhiệm vụ cũ;
5. Sau khi mở một cuộc trò chuyện mới, phải dựng lại tình trạng học tập từ một đoạn kể lại dài dòng.

Độ dài ngữ cảnh không phải là vấn đề duy nhất. Nhật ký trò chuyện không có phiên bản ổn định và không tách bạch rõ giữa sự kiện đã hoàn thành, cách AI diễn giải, và giả thuyết cho bước tiếp theo. Trạng thái học tập không nên bị nhốt trong một nhà cung cấp hay một cuộc trò chuyện duy nhất.

## Nhiệm vụ của từng công cụ trong năm công cụ

| Công cụ | Vai trò trong trường hợp này | Điều nó không đảm nhiệm |
| --- | --- | --- |
| [Trạng thái học tập](learning-state.md) | Lưu giữ các sự kiện, bằng chứng, lỗi, giới hạn xuyên suốt các phiên, và nhiệm vụ tiếp theo | Từng dòng nội dung cuộc trò chuyện |
| [Bản tóm tắt nhiệm vụ AI](ai-task-brief.md) | Giới hạn nhiệm vụ 45 phút hiện tại, đầu vào, sự hỗ trợ và tiêu chí nghiệm thu | Toàn bộ kế hoạch cuộc đời |
| [Chuỗi bằng chứng](evidence-chain.md) | So sánh mức nền không hỗ trợ, phiên bản có hỗ trợ, bài kiểm tra lại sau một thời gian, và khả năng áp dụng sang hoàn cảnh khác | Việc chứng minh "sự thành thạo" chỉ qua một điểm số |
| [Đánh giá hàng tuần](weekly-review.md) | Thay đổi một biến số dựa trên bằng chứng của một tuần | Việc biến một tuần kém cỏi thành phán xét về phẩm chất con người |
| [Ghi chú thực địa của người đọc](reader-field-note.md) | Ghi lại bộ công cụ có được đưa vào hành động hay không và ở đâu nó vẫn không dùng được | Việc công bố công khai hay chấm điểm cuốn sách |

Nếu đây là lần đầu bạn dùng bộ công cụ này, hãy làm theo trang này trong một tuần. Đừng mở tất cả các mẫu khác cùng một lúc.

## Bước một: Đưa trạng thái ra ngoài cuộc hội thoại

Người học tạo ra `python-learning-state.md` thay vì dùng một luồng hội thoại AI làm bộ nhớ:

```markdown
# Learning State — python-90d-v1

Updated: 2026-09-02
Ninety-day situation: independently deliver a CSV-summary command-line tool and explain input validation, error handling, and tests.
Current baseline: can write variables, if, and for; cannot independently read CSV, separate functions, or write tests.
Reliable capacity: Monday, Wednesday, Friday, and Sunday, 45 minutes each.
Existing evidence: baseline/day-01.py; crashes on a row with an empty value.
Repeated errors: looking at answers first; treating running code as explained code; changing several variables and losing the cause.
Boundaries: synthetic data only; submit my version first; no make-up study after 23:00.
Current phase: days 1–14, calibrate.
Smallest next task: read a 12-row synthetic CSV, skip empty rows, and print valid-row count plus total amount.
Acceptance: the unaided version runs; I can explain each function; at least one failing test is preserved.
Stop condition: save state when 45 minutes ends; do not stay up to finish.
```

Tệp trạng thái chỉ giữ những gì có thể thay đổi hành động tiếp theo. Ghi chú khóa học, toàn bộ nhật ký hội thoại và mọi lần thử nghiệm nên nằm trong thư mục dẫn chứng thay vì trên trang trạng thái.

## Bước hai: Đưa AI mỗi lần một việc

Một cuộc hội thoại mới không yêu cầu AI "hãy nhớ tôi". Nó nhận vào trạng thái mới nhất cùng một bản tóm tắt công việc:

```markdown
Below is my Learning State file. First restate the version, goal, current evidence, main errors, boundaries, and next task in no more than six bullets. Point out conflicts or gaps. Do not add facts that are absent.

This session has one task: read a synthetic CSV, skip empty rows, and print valid-row count plus total amount.
Process: let me submit an unaided version first; identify at most three problems that affect the result without giving full code; after I revise it, test with two cases. At 45 minutes, return five updates: completed, evidence, error/risk, handover, and next step.
```

Việc đầu tiên của AI là diễn đạt lại trạng thái, chứ không phải bắt đầu một bài giảng. Khi lời diễn đạt lại sai, hãy sửa trạng thái hoặc prompt trước khi tạo ra một kế hoạch mới dựa trên tiền đề sai.

## Bước Ba: Lưu Điểm Chuẩn Trước Khi Xin Trợ Giúp

Lần thử độc lập mô phỏng tạo ra kết quả sau:

| Điều kiện | Kết quả | Bằng chứng |
| --- | --- | --- |
| 25 phút, không có kết quả | Đọc được các dòng hợp lệ; số tiền trống gây ra ngoại lệ; toàn bộ logic nằm trong một hàm duy nhất | `evidence/week-01/baseline.py` |
| AI chỉ xác định được ba vấn đề | Việc kiểm tra giá trị trống, việc phân bổ hàm, và việc thiếu kiểm thử trở nên rõ ràng | `evidence/week-01/feedback.md` |
| Sau khi chỉnh sửa | Các kiểm thử với dòng thông thường và dòng trống đều đạt; định dạng số tiền không hợp lệ vẫn chưa được hỗ trợ | `evidence/week-01/revision.py` |

Bản ghi này không phải là "AI đã viết chương trình". Nó cho thấy phiên bản tự làm bộc lộ ba vấn đề, AI giúp phân loại chúng, người học sửa được hai, và vấn đề thứ ba trở thành nhiệm vụ tiếp theo.

Xin code hoàn chỉnh ngay từ đầu có thể cho ra một tệp trông đẹp hơn, nhưng đồng thời xóa mất điểm chuẩn và mọi cách để nhận biết năng lực nào thực sự thuộc về người học.

## Bước Bốn: Đưa Artefact vào Chuỗi Bằng Chứng

Tuần một không lưu lại tuyên bố "đã học CSV". Nó ghi lại bốn mốc thời gian:

| Mốc thời gian | Điều kiện | Kết quả tổng hợp | Điều vẫn chưa thể cho thấy |
| --- | --- | --- | --- |
| Mốc gốc | Không có AI, 25 phút | Đạt 1/3 điều kiện nghiệm thu | Sự hiểu biết về xử lý lỗi |
| Ngay sau khi được hỗ trợ | Đã thấy ba điểm phản hồi | Đạt 2/3; có thể giải thích hai hàm | Khả năng ghi nhớ sau vài ngày |
| Kiểm tra lại chậm sau bảy ngày | Đóng mã cũ; viết CSV song song | Đạt 2/3; lọt lại trường hợp số tiền không hợp lệ | Khả năng thích ứng với một trường mới |
| Chuyển giao | Thêm một trường `currency` | Tìm đúng nơi cần sửa; kiểm tra đơn vị tiền tệ chưa hoàn chỉnh | Cấu trúc bắt đầu chuyển giao, nhưng vẫn thiếu các điều kiện tiên quyết |

Kết quả không hoàn hảo và giàu thông tin hơn "duy trì chuỗi bảy ngày liên tục". Biến số tiếp theo không phải là pandas, một web framework và một cơ sở dữ liệu. Đó là xác thực đầu vào và các bài kiểm tra chưa đạt.

## Bước Năm: Tiếp Tục Trong Một Cuộc Trò Chuyện Mới

Buổi tổng kết hàng tuần chỉ ghi lại những thông tin làm thay đổi quyết định trở lại vào tệp trạng thái:

```markdown
# Learning State — python-90d-v2

Updated: 2026-09-08
Completed: normal and empty CSV rows; logic separated into read_rows and summarize.
Evidence: week-01/baseline.py; revision.py; day-07-retest.py; tests.md.
Delayed result: 2/3 conditions remain on day seven; invalid amount fails again.
Main error: failure paths lack tests; normal output causes testing to stop too early.
Boundaries retained: synthetic data; unaided answer first; stop at 45 minutes; no repayment of missed time.
Smallest next task: write three failing tests before implementing parse_amount.
Acceptance: empty, alphabetic, and negative inputs have explicit outcomes; design choice can be explained aloud.
Next review: 2026-09-15.
```

Cuộc trò chuyện cũ có thể kết thúc. Cuộc trò chuyện mới chỉ cần `v2` và vị trí của các bằng chứng liên quan, chứ không cần hàng chục nghìn từ từ đoạn chat. **AI không theo dõi việc học giữa các phiên. Tệp trạng thái đã theo dõi điều đó, và AI đã đọc và sử dụng trạng thái đó.**

## Bước Sáu: Hoàn thành Phiếu Ghi Hiện Trường của Người Đọc sau Bảy Ngày

Bản trình diễn tổng hợp cũng phải kiểm tra xem bộ công cụ có hỗ trợ hành động hay không:

```markdown
Entry problem: I did not know how a new AI conversation could continue a three-month plan.
Action: created a versioned Learning State, completed one CSV task, and saved an unaided version plus retest.
What remained after seven days: could write state v2 without the old chat and begin one defined task in a new conversation.
Failed transfer: knew errors should be preserved but still did not know how to classify them.
Most useful: the five-tool responsibility table and filled state example.
Still abstract: phase gates need examples for more kinds of goals.
Cannot conclude: this workflow guarantees job readiness after ninety days.
```

Phiếu ghi ban đầu vẫn được giữ kín. Chỉ sau khi đã loại bỏ các đường dẫn, thông tin nhận dạng và chi tiết nhạy cảm, một phiên bản công khai mới được cân nhắc.

## Nếu Tuần Bị Gián Đoạn

Tệp trạng thái không yêu cầu hoàn trả toàn bộ kế hoạch. Bản ghi quay lại đầu tiên chỉ ghi nhận sự thật:

```markdown
Interruption fact: no practice for seven days.
Cause evidence: two overtime evenings, one period of illness, no retest completed.
What I will not do: compress four lessons into the weekend or repay them through lost sleep.
Return action: run the previous tests, write one failing case, and update state.
24-hour acceptance: preserve the failing test and the next 25-minute entry point.
```

Khi sức khỏe, an toàn, trách nhiệm công việc hay các mối quan hệ cần được ưu tiên, thì chính việc phục hồi đã là kết quả của tuần đó. Kế hoạch phục vụ cuộc sống; cuộc sống không cần xin lỗi kế hoạch.

## Quy trình buổi học bạn có thể sao chép

```markdown
1. Restate the submitted state version, goal, evidence, errors, boundaries, and next task.
2. Identify conflicts and missing information; do not infer unwritten history.
3. Handle one minimum task only and let me submit the unaided version first.
4. Give at most three high-impact feedback points, separating observation, interpretation, and suggestion.
5. Do not provide a complete answer unless I explicitly request it.
6. End with: completed, evidence, error/risk, handover, and next step.
7. Treat the file as the source of truth and do not claim memory of other conversations.
```

Quy trình này không thể đảm bảo rằng AI không bao giờ sai. Nó giúp việc phát hiện lỗi trở nên dễ dàng hơn và giữ cho người học vẫn nắm quyền sở hữu đối với vấn đề, trạng thái cũng như nhận định cuối cùng.

## Phần Hướng Dẫn Này Minh Họa Điều Gì và Không Minh Họa Điều Gì

Phần này cho thấy năm công cụ có thể tạo thành một bàn giao rõ ràng: trạng thái được lưu bên ngoài cuộc hội thoại, nhiệm vụ trở nên nhỏ hơn, phiên bản tự làm và phiên bản có trợ giúp vẫn tách biệt, có một buổi kiểm tra lại sau thời gian trễ, và một cuộc hội thoại mới có điểm khởi đầu đáng tin cậy.

Phần này không cho thấy rằng:

- Người học giả định sẽ duy trì trong chín mươi ngày;
- Mức độ khó của nhiệm vụ này phù hợp với mọi người mới bắt đầu;
- AI luôn giúp học nhanh hơn so với việc tự học không có AI;
- Hoàn thành một công cụ dòng lệnh đồng nghĩa với sẵn sàng cho công việc thực tế;
- Một tuần đại diện cho khả năng chuyển giao kiến thức lâu dài.

Trong thực tế, hãy giữ lại dữ liệu gốc, sản phẩm đầu ra, thời gian, chi phí và các lần thất bại của riêng bạn. Ví dụ chỉ cho thấy cách ghi chép. Thực tế mới quyết định những ghi chép đó có hữu ích hay không.

## Phần kết: Trao ký ức cho tệp và giữ phán đoán lại cho chính mình

Một dự án học tập dài hơi không nên đánh mất quá khứ của mình khi một cuộc trò chuyện khép lại, và cũng không nên giả vờ mang tính liên tục chỉ vì một cuộc trò chuyện kéo dài.

Hãy để tệp trạng thái ghi lại những gì đã xảy ra. Hãy để bằng chứng lưu giữ những gì bạn thực sự đã làm. Hãy để cuộc trò chuyện tiếp theo chỉ mang theo bước tiếp theo. Công cụ có thể thay đổi, mô hình có thể được cập nhật, và kế hoạch có thể bị thu hẹp. Chừng nào bạn còn biết mình xuất phát từ đâu, điều gì vẫn chưa được kiểm chứng, và nhiệm vụ tiếp theo nằm ở đâu, thì việc học vẫn không bị nhốt trong bất kỳ cuộc trò chuyện nào.

Điểm vào liên quan: [Trạng thái học tập](learning-state.md) | [Bản giao việc AI](ai-task-brief.md) | [Chuỗi bằng chứng](evidence-chain.md) | [Ghi chú thực địa của người đọc](reader-field-note.md)
