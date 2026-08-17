---
name: latex-paper
description: LaTeX academic paper drafting — IEEE, ACM, USENIX formatting; BibTeX management; figure and table standards
domain: research
---

# LaTeX Academic Paper Skill

## Document Class Selection
- IEEE: `\documentclass[conference]{IEEEtran}`
- ACM: `\documentclass[sigconf]{acmart}`
- USENIX: Use provided USENIX style file.

## Figure Standards
- All figures must have captions below the figure.
- Resolution: ≥ 300 DPI for raster images, prefer vector (PDF/EPS).
- Reference every figure in the text before it appears.

## Citation Rules
- Use BibTeX with `.bib` file — never manual bibliography entries.
- Cite all claims, datasets, tools, and frameworks used.
- ACM/IEEE require full first names — avoid abbreviated names.

## Compilation
- Run sequence: `pdflatex → bibtex → pdflatex → pdflatex`
- Check for overfull hboxes and fix them.
- Final PDF must not exceed page limit including references.
