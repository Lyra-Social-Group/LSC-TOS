# Contributing Guidelines

Thank you for helping improve the **Lyra Social Group** legal, privacy, and community operational documentation! 

Because these documents serve as the active governing frameworks across our Discord servers, VRChat spaces, and automated tools, we maintain a clear and structured process for proposing amendments, structural updates, or typo fixes.

---

## 📜 Principles for Policy Updates

When suggesting updates to these documents, please keep the following in mind:
* **Clarity & Transparency:** Use clear, accessible language without sacrificing legal or technical accuracy.
* **Community Alignment:** Ensure proposed changes align with our goal of fostering a safe, inclusive, and transparent environment.
* **Consistency:** Maintain standardized markdown formatting, metadata blocks, and document organization.

---

## 🛠 Proposing Amendments & Workflow

### 1. Fork & Branch
* Fork the `Lyra-Social-Group/LCH-TOS` repository to your personal GitHub account.
* Create a dedicated topic branch for your changes:
  git checkout -b feature/policy-update
  # or for quick fixes:
  git checkout -b fix/typo-discord-tos

### 2. Standardized Metadata Header
Every policy file within this repository utilizes a front-matter metadata block. If you edit or add a document, you **must** retain or update this block accordingly:

---
Document: <Document Title>
Version: <Bump if major policy shift version>
Effective Date: YYYY-MM-DD
Last Updated: YYYY-MM-DD
Maintainer: Lyra Social Group Administration
---

### 3. Open a Pull Request (PR)
* Push your branch to your fork and submit a Pull Request to the `main` branch.
* Title your PR clearly (e.g., `docs: update appeals timeline in community/appeals.md`).
* Provide a comprehensive PR description detailing:
  1. **What changed:** High-level summary of edited sections.
  2. **Rationale:** Why this change benefits the community or improves operational clarity.
  3. **Impact:** Whether this change creates new rules or simply clarifies existing policy.

### 4. Review & Approval Process
* **Administrative Review:** All Pull Requests require explicit review and approval from **Lyra Social Group Administration** before merging.
* **Community Feedback Period:** Significant policy amendments may be opened for community discussion prior to merging.
* **Changelog Tracking:** Upon PR approval, the administrative team will document the change in `CHANGELOG.md` with the new version tag.

---

## ⚠️ Security Vulnerabilities & Private Reporting

**Do not open a public Issue or Pull Request for security vulnerabilities** regarding bots, network infrastructure, or sensitive data handling.

Please refer to our [`SECURITY.md`](SECURITY.md) guidelines or contact us directly at:
* **Legal & Compliance:** [LEGAL@LYRAFOXWOOD.APP](mailto:LEGAL@LYRAFOXWOOD.APP)
* **General Administration:** [lsg@lyrafoxwood.app](mailto:lsg@lyrafoxwood.app)