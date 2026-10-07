---
title: Artifact Brief and Delivery Card
description: Manage a reviewable, handover-ready learning or project artifact with audience, baseline, versions, feedback, quality gates, and rollback.
updated: 2026-08-31
---

# Tóm tắt Artifact và Thẻ Bàn giao

Một artifact không cần phải hoàn chỉnh ngay từ ngày đầu, nhưng nó cần có ranh giới rõ ràng ngay từ ngày đầu. Hãy sao chép thẻ này vào một thư mục dự án riêng tư và lưu giữ các phiên bản độc lập, phiên bản đã chỉnh sửa, phiên bản đã soát xét và phiên bản đã bàn giao. Không đưa vào mật khẩu, dữ liệu khách hàng, thông tin của bên thứ ba chưa được cấp quyền, hay các chi tiết cá nhân không cần thiết.

## 1. Ranh giới tạo phẩm

```markdown
# Artifact Brief — YYYY-MM-DD

Artifact name:
Real situation:
Audience/user:
One problem to solve:

Inputs and sources:
My current baseline:
Key assumptions:

Smallest deliverable:
Format, time, and other constraints:
Acceptance criteria:
What this will not include:

First-version deadline:
Who will give feedback:
Evidence to preserve:
How to shrink, pause, or roll back:
Next review date:
```

## 2. Bốn phiên bản

| Phiên bản | Điều kiện hoàn thành | Cần lưu lại những gì |
| --- | --- | --- |
| Độc lập | Hoàn thành hành động nhỏ nhất mà không có đáp án sẵn hay để AI viết thay | Tệp gốc, thời gian, điểm nghẽn |
| Cấu trúc | Người đọc tìm được vấn đề, kết luận và bước tiếp theo | So sánh khác biệt về cấu trúc, dấu phân biệt sự thật/giả định |
| Đánh giá | Một người đọc, người dùng, đồng nghiệp thực sự hoặc một AI đánh giá được định nghĩa hoàn thành một lượt đánh giá | Phản hồi, phân loại lỗi, lý do chấp nhận/từ chối |
| Bàn giao | Người khác có thể bắt đầu mà không cần bạn giải thích bằng miệng | Phiên bản, giới hạn, nguồn tài liệu, lỗi đã biết, biên bản bàn giao |

## 3. Cổng chất lượng

| Cổng | Kiểm tra | Vị trí dẫn chứng | Người phụ trách/ngày |
| --- | --- | --- | --- |
| Rõ ràng | Người đọc có hiểu vấn đề và bước tiếp theo cần làm không? | | |
| Chính xác | Sự kiện, trích dẫn, mã và số liệu có dẫn về nguồn hoặc kết quả kiểm chứng nào không? | | |
| Dùng được | Hành động chính có khả thi trong điều kiện thực tế không? | | |
| Dễ bảo trì | Phiên bản, phần phụ thuộc, giới hạn và người phụ trách có được thể hiện rõ không? | | |
| Có trách nhiệm | Quyền riêng tư, bản quyền, quyền hạn và hậu quả khi có lỗi đã được xử lý chưa? | | |

Ghi "chưa kiểm chứng" khi không có bằng chứng cho mức đạt. Tốc độ, số từ và số lượng tính năng chỉ là thước đo thay thế, không phải cổng chất lượng.

## 4. Hồ sơ AI và phản hồi

```markdown
AI/tool and date:
Work it was allowed to do:
Human judgments I kept:
Three highest-impact issues it raised:
What I accepted/rejected, and why:
Main point restated by a real reader/user:
Most important repair:
```

Hãy lưu bản của bạn trước, sau đó dùng AI để chẩn đoán, mô phỏng độc giả, hoặc tạo một nhiệm vụ song song. Con người xác nhận các thông tin quan trọng, quyền hạn, quyền riêng tư, chi phí và tư cách tác giả cuối cùng.

## 5. Bàn giao và hoàn tác

```markdown
Delivery audience and permission scope:
Delivery date and version:
Instructions:
Known limits:
Support owner/contact:
Cost and retention period:
Pause/degrade/rollback trigger:
Who must be notified after a problem:
Next review date:
```

Bàn giao không phải là điểm kết thúc. Sau 3–7 ngày, hãy chạy một đợt kiểm thử song song và ghi lại xem người khác có thể tự khởi động một mình hay không, phần nào vẫn cần giải thích thêm, và một thay đổi duy nhất cần làm cho phiên bản tiếp theo.

Các chương liên quan: [Sản phẩm: Biến bài học thành thứ được tạo ra](../threads/part-3/4-artifacts-and-delivery.md) | [Bản đồ chu kỳ 90 ngày](90-day-cycle.md)
