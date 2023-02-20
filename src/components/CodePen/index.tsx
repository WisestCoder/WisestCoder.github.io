import React, { FC, useCallback, useContext, useMemo, useState } from 'react'
import { Modal, Row, Col } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import debounce from 'lodash.debounce'
import { LiveProvider, LiveEditor, LivePreview } from '../ReactLive'

type IProps = ModalProps & {
  codeLiveProps: any
}

function Block({ children, height = 700 }) {
  return (
    <div style={{ height, overflow: 'auto' }}>
      {children}
    </div>
  )
}

const CodePen: FC<IProps> = ({
  codeLiveProps,
  ...others
}) => {
  const [code, setCode] = useState(codeLiveProps.code)

  const onChange = useCallback((e) => {
    setCode(e.target.value)
  }, [])

  const debounceChange = useMemo(() => debounce(onChange, 1000), [onChange])

  return (
    <Modal
      {...others}
      title="在线演示"
    >
      <LiveProvider
        {...codeLiveProps}
        code={code}
        onChange={debounceChange}
      >
        <Row gutter={40}>
          <Col span={12}>
            <Block>
              <LiveEditor />
            </Block>
          </Col>
          <Col span={12}>
            <Block>
              <LivePreview />
            </Block>
          </Col>
        </Row>
      </LiveProvider>
    </Modal>
  )
}

export default CodePen