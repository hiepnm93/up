---
title: "AI Task Brief: From Problem to Human Acceptance"
description: Before an AI learning or project task, define the real action, data boundary, sources, evaluation set, human ownership, cost, failure handling, and handover.
updated: 2026-09-20
---

# Bản tóm tắt nhiệm vụ AI: Từ vấn đề đến khi con người chấp nhận

Hãy chép bản này vào một thư mục dự án riêng tư trước khi gọi mô hình. Đây không phải là một bộ sưu tập prompt. Đây là sự cho phép để bắt đầu: khi nhiệm vụ, dữ liệu, nguồn tài liệu, tiêu chí chấp nhận hoặc quyền sở hữu vẫn còn chưa rõ ràng, đừng vội yêu cầu mô hình đưa ra kết quả cuối cùng.

Không đưa vào mật khẩu, giấy tờ tùy thân, địa chỉ chính xác, thông tin y tế riêng tư, dữ liệu của trẻ em, hồ sơ khách hàng, các lỗ hổng bảo mật chưa được công bố, hay tài liệu của bên thứ ba chưa được phép. Hãy che giấu thông tin nhạy cảm hoặc sử dụng môi trường được tổ chức phê duyệt.

## 1. Nhiệm vụ và quyền sở hữu

```markdown
# AI Task Brief - YYYY-MM-DD

Real situation:
User/audience:
Decision or action to complete:
Why now:
Deadline and non-negotiable checkpoints:
Final owner and human reviewer:
Who is affected if this is delayed or not done:
```

Thay “học AI” hoặc “xây dựng trợ lý thông minh” bằng một hành động có thể quan sát được, chẳng hạn như “người dùng có thể nhập một tệp trong mười phút và xem được báo cáo dễ lý giải kèm nguồn và các lỗi”.

## 2. Đầu vào, Nguồn và Ranh giới Dữ liệu

| Đầu vào / tuyên bố | Loại | Nguồn, phiên bản, vị trí | Có thể tới mô hình không? | Bên xác minh | Điều kiện hết hạn |
| --- | --- | --- | --- | --- | --- |
| | sự kiện / suy luận / kinh nghiệm / dữ liệu người dùng / bên thứ ba | | công khai / đã xóa thông tin nhạy cảm / đã được phê duyệt / bị cấm | | |

```markdown
Files and fields allowed:
Material deliberately withheld:
Data sensitivity: public / internal / confidential / restricted
Collection, transfer, retention, and deletion dates:
Required consent obtained:
Copyright, licence, citation, and authorship requirements:
Minimum data scope the model can see:
```

Một nguồn không tự động đúng. Mỗi tuyên bố quan trọng phải được đối chiếu trở lại với đoạn văn gốc, phiên bản, định nghĩa dữ liệu hoặc quan sát trực tiếp. Các liên kết, con số và trích dẫn do mô hình đưa ra vẫn cần con người xác minh.

## 3. Tập đầu ra và tập đánh giá

```markdown
Final deliverable:
Format, length, and audience:
Observable definition of done:
Hard gates that must pass:
Acceptable variation:
Content that must not appear:
```

Hãy xây dựng một tập đánh giá nhỏ, sát với thực tế thay vì chỉ dùng những ví dụ "dễ nhằn" cho mô hình:

| Mẫu | Điều kiện đầu vào | Kết quả mong đợi | Kết quả không được phép xảy ra | Kết quả thực tế | Vị trí dẫn chứng |
| --- | --- | --- | --- | --- | --- |
| Trường hợp bình thường | | | | | |
| Trường hợp biên | | | | | |
| Đầu vào thiếu/xung đột | | | | | |
| Hồ sơ lịch sử đã bị che bớt thông tin | | | | | |

Tiêu chí nghiệm thu cần trả lời được: các sự kiện có truy vết được nguồn không, hành động có hoàn chỉnh không, lỗi có hiển thị rõ ràng không, phân quyền có đúng không, và khi có sự cố thì có thể dừng lại kịp thời không. Trôi chảy, nhanh hay giống con người không phải là tiêu chuẩn nghiệm thu.

## 4. Phạm vi làm việc của AI

```markdown
AI may: ask / classify / propose explanations / give counterexamples / transcribe
        / draft / suggest tests
AI may not: make final factual decisions / invent sources / approve for the owner
             / cross permissions / complete a prohibited exam or application
             / publish or execute automatically
Mode: diagnosis / assistance / candidate generation / batch processing / other
Model, version, region, and call date:
External tools, MCP servers, or other protocols and versions:
Read/write scope, authorizer, and revocation method for each tool:
Prompt, system instruction, or workflow version location:
```

Yêu cầu mô hình tóm tắt lại mục tiêu, dữ liệu đầu vào, giới hạn, những điểm chưa rõ và tiêu chí nghiệm thu trước khi tạo nội dung. Đánh phiên bản cho các prompt và không bao giờ coi một cửa sổ trò chuyện là bản ghi duy nhất của dự án.

## 5. Các chốt kiểm soát của con người

| Chốt kiểm soát | Ai xác nhận | Bằng chứng đạt yêu cầu | Nếu không đạt |
| --- | --- | --- | --- |
| Chốt nguồn | | Liên kết gốc, phiên bản, vị trí | Đánh dấu là chưa xác minh; không lan truyền |
| Chốt kiểm chứng sự thật | | Kiểm tra mẫu và định nghĩa dữ liệu | Xóa hoặc hạ mức khẳng định |
| Chốt quyền riêng tư/quyền truy cập | | Phạm vi, sự đồng ý, bản ghi truy cập | Dừng lại và che giấu thông tin nhạy cảm |
| Chốt chất lượng | | Tập đánh giá, trường hợp biên, phản hồi thực tế | Sửa chữa, thu hẹp phạm vi hoặc loại bỏ |
| Chốt chi phí | | Token, thời gian, khối lượng làm lại của con người, ngân sách | Hạ cấp hoặc dừng |
| Chốt ủy quyền công cụ | | Phạm vi công cụ, bản ghi lệnh gọi, ủy quyền có chủ thể chỉ định và cách thu hồi | Chặn lệnh gọi hoặc chuyển lại cho con người xử lý |
| Chốt quyền sở hữu | | Phê duyệt có chủ thể chỉ định và công bố minh bạch | Không xuất bản hoặc thực thi |

Các quyết định quan trọng không thể được phê duyệt chỉ bởi chính hệ thống tạo sinh, một điểm số tự động, hay một lập trình viên đơn lẻ. Trong các lĩnh vực rủi ro cao, phải quay trở lại với các nguồn sơ cấp hiện hành và các chuyên gia đủ trình độ.

## 6. Chi phí, Lưu trữ, và Khả năng Đảo ngược

```markdown
Call volume, time, and cost ceiling:
Human review and rework budget:
Does data enter training, logs, or third-party retention:
Acceptable latency and downgrade path:
Version that can be withdrawn, rerun, or restored:
Release scope and pilot audience:
```

Một lệnh gọi trông có vẻ rẻ nhưng gây ra sự cố về riêng tư, quyết định sai, hoặc phải làm lại nhiều thì thực tế không hề rẻ. Hãy ghi nhận cả thời gian con người, việc rà soát, lỗi, chạy lại, và trao đổi thông tin, bên cạnh phí mô hình.

## 7. Thất bại, tạm dừng và hoàn tác (Rollback)

| Điều kiện kích hoạt | Hành động ngay lập tức | Thông báo | Vị trí khôi phục/hoàn tác |
| --- | --- | --- | --- |
| Không tìm thấy nguồn hoặc phiên bản | Dừng lưu hành; quay lại bản gốc | | |
| Rào chặn bắt buộc khi đánh giá không đạt | Chặn phát hành hoặc hành động tự động | | |
| Đầu vào vượt qua ranh giới quyền hạn | Dừng tải lên; thu hồi quyền truy cập | | |
| Chi phí/độ trễ vượt quá ngưỡng cho phép | Hạ cấp, giới hạn hoặc dừng | | |
| Người dùng thực tế báo cáo thiệt hại | Gỡ bỏ, bảo toàn bằng chứng, chuyển lên cấp trên | | |

Nếu không có người chịu trách nhiệm dừng rõ ràng, đường dẫn thông báo và phiên bản đã được kiểm chứng, tác vụ chưa sẵn sàng cho quy trình làm việc thực tế.

## 8. Bàn giao và Công bố công khai

```markdown
Current state: not started / experiment / internal pilot / limited release / delivered / stopped
Completed work and evidence locations:
Open questions and risks:
Smallest next task:
Handover owner, date, and access:
What readers/users need to know about AI involvement:
Source, privacy, copyright, and conflict-of-interest note:
```

Người tiếp quản sau không nên phải tìm kiếm trong lịch sử trò chuyện mới biết mình cần làm gì. Phần công bố công khai cần nêu rõ bước nào dùng đến công cụ, sự kiện nào đã do con người xác nhận, và nội dung nào vẫn còn ở dạng chưa kiểm chứng.

## 9. Kiểm tra trước khi thực hiện

- [ ] Đối tượng đọc, hành động, thời hạn và người phụ trách được nêu rõ ràng.
- [ ] Các trường dữ liệu đầu vào, mức độ nhạy cảm, sự đồng ý, bản quyền và thời gian lưu trữ đã được xác nhận.
- [ ] Các nguồn quan trọng, phiên bản và điều kiện hết hạn có thể truy vết được.
- [ ] Các trường hợp bình thường, biên, xung đột và lịch sử đã được lược bỏ thông tin nhạy cảm nằm trong bộ dữ liệu đánh giá.
- [ ] Phạm vi AI được phép/không được phép làm được nêu rõ ràng.
- [ ] Các điểm kiểm tra của con người, trần chi phí, điều kiện dừng và vị trí hoàn tác được chỉ định cụ thể.
- [ ] Việc bàn giao, công bố thông tin và ngày rà soát tiếp theo đã được thiết lập.
