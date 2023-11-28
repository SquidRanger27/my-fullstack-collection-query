// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import nock from 'nock'
import { render, screen, fireEvent, waitFor } from '@testing-library/react/pure'

import './setup.ts'
import * as Models from '../../../models/cheese.ts'
import AddCheese from '../AddCheese.tsx'
