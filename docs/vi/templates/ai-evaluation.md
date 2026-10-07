---
title: AI Evaluation Record
description: Record scope, held-out cases, versions, mandatory checks, failures, and complete process costs to decide whether to adopt, repair, or withdraw an AI workflow.
updated: 2026-10-03
---

# Biên bản đánh giá AI

Dùng kèm với [Đánh giá và độ tin cậy của AI](../threads/practice/ai-evaluation.md). Hãy xác định tiêu chí trước khi chạy các trường hợp. Biên bản để trống dùng cho việc so sánh một phiên bản; các con số ví dụ không phản ánh hiệu năng của mô hình cũng như không phải là ngưỡng phát hành chung cho mọi trường hợp.

## Bản ghi có thể sao chép

```markdown
# AI Evaluation — Date / Task

## Scope
- User and intended action:
- Input materials, permissions, and de-identification:
- Manual baseline and total time:
- Unsupported tasks:

## Test setup (fixed before running)
- Current version / candidate:
- Model, prompt, retrieved materials, and tool versions:
- Run date, region, memory settings, and service versions that cannot be pinned:
- The one main change:
- Development cases / held-out cases not used for tuning:
- Attempts per case and time, call-count, and spending limits:
- Conditions that must all pass:
- Quality comparisons and human scoring rubric:
- Reviewers / disagreement process:
- Relevant failures: absent sources / prompt injection / unauthorized actions / unbounded retries or duplicate side effects / transcription or image errors:

## Case records (copy this section separately for each version)
- Version for this section:
- Use case ID / trial number, such as 07 / 2; link inputs to fixed case materials.
### Case (copy once per attempt)
- Case ID / trial number:
- Case type and fixed input location:
- Expected behavior / judging rationale:
- Supporting passage / audio or video timestamp / image region:
- Actual behavior / artifact location:
- Transcript / tool calls / authorization record location:
- Final environment outcome (file, database, or user-visible state):
- First-pass acceptance / mandatory failures:
- Human revision minutes / changes:
- Final state (retain failures and timeouts):

## Results (calculate per version; retain failures and timeouts in denominators)
- First-pass accepted / all attempts:
- Mandatory failures and specific cases:
- Accepted after human revision / all attempts:
- Total minutes for preparation, execution, checking, and rework:
- Tool charges and the time valuation used:
- Total batch process cost / final accepted count:
- Evidence limits and unsupported inferences:

## Decision and follow-up
- Adopt / retain current version / repair and retest / stop:
- Cases supporting the decision:
- New regression cases and rerun scope:
- Retest triggers after model, material, tool, or memory changes; last accepted version:
- Permitted use / human takeover / withdrawal conditions:
- Exit rehearsal after switching providers, disabling memory, or disconnecting tools:
- Owner, review date, and record location:
```

Nếu không có kết quả nào được chấp nhận, hãy ghi chi phí trên mỗi kết quả được chấp nhận là \"không thể tính.\" Giữ nguyên tổng chi phí đã phát sinh thay vì thay nó bằng số không.

## Ví dụ minh họa: so sánh thông tin công khai

Trường hợp giả định này khớp với nội dung chương: mười trường hợp, mỗi trường hợp chỉ thực hiện một lần. A đạt tám trường hợp ngay lần đầu, B đạt chín trường hợp, và cả hai đều đạt đủ mười sau khi con người chỉnh sửa.

| Hạng mục | Nội dung ví dụ |
| --- | --- |
| Thay đổi | Chỉ thay đổi prompt trích xuất; tài liệu và công cụ giữ nguyên |
| Điều kiện bắt buộc | Các con số quan trọng phải có nguồn; không được suy đoán giá còn thiếu |
| Lỗi B-07 | Nguồn không nêu giá; B ghi "miễn phí"; người rà soát sửa thành "không cung cấp" |
| Chi phí của A | Tổng cộng 120 phút, định giá 60 RMB/giờ, cộng thêm 6 RMB tiền công cụ: 126 RMB |
| Chi phí của B | Tổng cộng 100 phút, cùng mức định giá, cộng thêm 8 RMB tiền công cụ: 108 RMB |
| Quyết định | Giữ phạm vi hiện tại; sửa lỗi B trước khi mở rộng sử dụng |
| Hành động tiếp theo | Bổ sung các trường hợp giá còn thiếu, lỗi thời và mâu thuẫn; chạy lại các trường hợp đã đạt trước đó |
| Giới hạn bằng chứng | Mẫu nhỏ, mỗi trường hợp chỉ thử một lần; không suy ra tỷ lệ lỗi trong môi trường thực tế; độ chính xác sau khi sửa không chứng minh được độ tin cậy khi hoạt động tự chủ |

Lưu kết quả thực tế vào các tệp có thể kiểm tra lại. Một hồ sơ hoàn thành cần có sản phẩm đầu ra, kết quả kiểm thử hoặc trạng thái hệ thống, chứ không thể chỉ dựa vào lời khẳng định thành công của mô hình.

## Biến bản ghi chép thành hành động

Mỗi vòng chỉ sửa một dạng lỗi chính rồi kiểm tra xem có lỗi hồi quy hay không. Nếu quy trình vẫn còn chưa rõ, hãy xem lại [Bản tóm tắt nhiệm vụ AI](ai-task-brief.md). Trước khi đem quy trình này cung cấp dưới dạng dịch vụ, hãy dùng [Thí nghiệm Khởi nghiệp](startup-experiment.md) để kiểm chứng nhu cầu tách riêng khỏi chất lượng đầu ra.
