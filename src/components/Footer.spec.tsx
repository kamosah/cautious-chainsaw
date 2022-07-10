import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module 'react-test-renderer/shallow' o... Remove this comment to see the full error message
import { createRenderer } from 'react-test-renderer/shallow';
// @ts-expect-error TS(6142) FIXME: Module './Footer' was resolved to '/Users/kwameamo... Remove this comment to see the full error message
import Footer from './Footer'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'

const setup = (propOverrides: any) => {
  const props = Object.assign({
    completedCount: 0,
    activeCount: 0,
    // @ts-expect-error TS(2304) FIXME: Cannot find name 'jest'.
    onClearCompleted: jest.fn(),
  }, propOverrides)

  const renderer = createRenderer()
  // @ts-expect-error TS(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  renderer.render(<Footer {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

const getTextContent = (elem: any) => {
  const children = Array.isArray(elem.props.children) ?
    elem.props.children : [ elem.props.children ]

  return children.reduce((out: any, child: any) =>
    // Concatenate the text
    // Children are either elements or text strings
    out + (child.props ? getTextContent(child) : child)
  , '');
}

describe('components', () => {
  describe('Footer', () => {
    it('should render container', () => {
      // @ts-expect-error TS(7022) FIXME: 'output' implicitly has type 'any' because it does... Remove this comment to see the full error message
      const { output } = setup()
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'output' used before its dec... Remove this comment to see the full error message
      (expect(output.type) as any).toBe('footer');
      (expect(output.props.className) as any).toBe('footer');
    })

    it('should display active count when 0', () => {
      const { output } = setup({ activeCount: 0 })
      // @ts-expect-error TS(7022) FIXME: 'count' implicitly has type 'any' because it does ... Remove this comment to see the full error message
      const [ count ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'count' used before its decl... Remove this comment to see the full error message
      (expect(getTextContent(count)) as any).toBe('No items left');
    })

    it('should display active count when above 0', () => {
      const { output } = setup({ activeCount: 1 })
      // @ts-expect-error TS(7022) FIXME: 'count' implicitly has type 'any' because it does ... Remove this comment to see the full error message
      const [ count ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'count' used before its decl... Remove this comment to see the full error message
      (expect(getTextContent(count)) as any).toBe('1 item left');
    })

    it('should render filters', () => {
      const todoFilters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED]
      const filterTitles = ['All', 'Active', 'Completed']
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
      const { output } = setup()
      // @ts-expect-error TS(7022) FIXME: 'filters' implicitly has type 'any' because it doe... Remove this comment to see the full error message
      const [ , filters ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'filters' used before its de... Remove this comment to see the full error message
      (expect(filters.type) as any).toBe('ul');
      (expect(filters.props.className) as any).toBe('filters');
      (expect(filters.props.children.length) as any).toBe(3);
      filters.props.children.forEach(function checkFilter(filter: any, i: any) {
        (expect(filter.type) as any).toBe('li');
        // @ts-expect-error TS(7022) FIXME: 'a' implicitly has type 'any' because it does not ... Remove this comment to see the full error message
        const a = filter.props.children
        // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'a' used before its declarat... Remove this comment to see the full error message
        (expect(a.type) as any).toBe(FilterLink);
        (expect(a.props.filter) as any).toBe(todoFilters[i]);        
        (expect(a.props.children) as any).toBe(filterTitles[i]);        
      })
    })

    it('shouldnt show clear button when no completed todos', () => {
      const { output } = setup({ completedCount: 0 })
      // @ts-expect-error TS(7022) FIXME: 'clear' implicitly has type 'any' because it does ... Remove this comment to see the full error message
      const [ , , clear ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'clear' used before its decl... Remove this comment to see the full error message
      (expect(clear) as any).toBe(false);
    })

    it('should render clear button when completed todos', () => {
      const { output } = setup({ completedCount: 1 })
      // @ts-expect-error TS(7022) FIXME: 'clear' implicitly has type 'any' because it does ... Remove this comment to see the full error message
      const [ , , clear ] = output.props.children
      // @ts-expect-error TS(2448) FIXME: Block-scoped variable 'clear' used before its decl... Remove this comment to see the full error message
      (expect(clear.type) as any).toBe('button');
      (expect(clear.props.className) as any).toBe('clear-completed');
      (expect(clear.props.children) as any).toBe('Clear completed');
    })

    it('should call onClearCompleted on clear button click', () => {
      const { output, props } = setup({ completedCount: 1 })
      const [ , , clear ] = output.props.children
      clear.props.onClick({})
      (expect(props.onClearCompleted) as any).toBeCalled();
    })
  })
})
