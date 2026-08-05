---
Document: Data Retention Policy
Version: 1.0.0
Effective Date: 2026-08-05
Last Updated: 2026-08-05
Maintainer: Lyra Social Group Administration
Contact: LEGAL@LYRAFOXWOOD.APP
---

# Data Retention Policy

## 1. Overview & Purpose
This Data Retention Policy defines the operational life cycle, storage schedules, and deletion protocols for all user telemetry, automated bot logs, system diagnostics, and moderation records maintained across **Lyra Social Group** digital infrastructure.

Our objective is to balance data minimization principles with the operational necessity of maintaining community safety, preventing abuse, and ensuring system uptime.

## 2. Retention Schedules

| Data Category | Description & Examples | Retention Period | Disposition Protocol |
| :--- | :--- | :--- | :--- |
| **Standard Bot Logs** | Command usage metrics, interaction timestamps, user/guild IDs. | **30 Days** | Automated database purge / partition cleanup. |
| **System Debug Telemetry** | API stack traces, error reports, network routing logs. | **14 Days** | Automated log rotation and overwriting. |
| **Moderation Audit Logs** | Ban logs, warning records, ticket transcripts, policy violation history. | **Indefinite** | Securely archived for active enforcement & ban evasion prevention. |
| **Support Tickets** | Resolved administrative and community support correspondence. | **90 Days** | Soft-deleted at 90 days, purged from backups at 180 days. |

## 3. Exceptions to Scheduled Deletion
Data normally slated for automated deletion or rotation may be held beyond standard retention periods under the following exceptional circumstances:
* **Security & Evasion Audits:** Telemetry linked to active ban evasion attempts, malicious exploits, or ongoing targeted harassment investigations.
* **Legal & Regulatory Obligations:** Information required to be preserved pursuant to valid legal requests, law enforcement inquiries, or formal disputes.

## 4. User-Initiated Data Erasure & Purge Requests

### A. Submitting a Purge Request
Users may request the removal of their personal telemetry records by opening an administrative support ticket in our primary Discord server or emailing [LEGAL@LYRAFOXWOOD.APP](mailto:LEGAL@LYRAFOXWOOD.APP) with the subject line `Data Deletion Request - [Discord User ID]`.

### B. Erasure Execution Timeline
* **Verification:** Upon receipt of a valid request, administration will verify ownership of the associated account within **5 business days**.
* **Database Scrubbing:** Non-essential records (including standard bot command history, support ticket transcripts, and temporary logs) will be permanently scrubbed from active operational databases within **30 business days**.
* **Backup Purging:** Secondary database backups and automated snapshots will completely overwrite the data within **60 business days**.

### C. Carve-Outs for Moderation Integrity
To preserve community safety across all Discord servers and VRChat spaces, **formal moderation records (bans, active mutes, and safety warning logs) are non-erasable**. Deletion requests will not result in the removal of ban records used to restrict blacklisted or dangerous individuals from re-entering our services.

## 5. Contact & Data Protection Enquiries
For questions regarding data lifecycles, automated retention routines, or data erasure statuses, reach out via:
* **Legal & Compliance:** [LEGAL@LYRAFOXWOOD.APP](mailto:LEGAL@LYRAFOXWOOD.APP)
* **General Administration:** [lsg@lyrafoxwood.app](mailto:lsg@lyrafoxwood.app)