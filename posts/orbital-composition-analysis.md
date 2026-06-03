# Orbital Composition Analysis

*This is placeholder content showing how a technical post looks — replace it
with your real article.*

When we talk about a molecular orbital (MO), it is often useful to know **how
much** each atom contributes to it. Mulliken-style population analysis gives a
simple way to do this.

## The basic idea

A molecular orbital $\psi_i$ is a linear combination of atomic basis functions
$\chi_\mu$:

$$\psi_i = \sum_\mu c_{\mu i}\, \chi_\mu$$

The contribution of basis function $\mu$ to orbital $i$ can be written using the
overlap matrix $S$ as:

$$P_{\mu i} = \sum_\nu c_{\mu i}\, c_{\nu i}\, S_{\mu\nu}$$

Summing $P_{\mu i}$ over all basis functions on a given atom gives that atom's
percentage contribution to the orbital.

## A quick script

```python
import numpy as np

def orbital_composition(C, S, atom_of_basis, mo_index):
    """Percent contribution of each atom to one MO."""
    c = C[:, mo_index]
    P = np.outer(c, c) * S            # contribution matrix
    per_basis = P.sum(axis=1)         # Mulliken gross population
    atoms = sorted(set(atom_of_basis))
    return {a: 100 * per_basis[[i for i, x in enumerate(atom_of_basis) if x == a]].sum()
            for a in atoms}
```

## Example output

| Atom | Contribution |
| ---- | ------------ |
| C1   | 42.3 %       |
| C2   | 38.7 %       |
| O3   | 19.0 %       |

> **Tip:** values can slightly exceed 100 % or go negative for diffuse basis
> sets — that's a known quirk of Mulliken analysis, not a bug.

Replace this article with your own writing whenever you're ready.
