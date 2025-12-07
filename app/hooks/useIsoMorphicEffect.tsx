/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useLayoutEffect } from "react"
import { isServer } from "../utils/env"

export const useIsoMorphicEffect = isServer ? useEffect : useLayoutEffect

